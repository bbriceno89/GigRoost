from flask import Flask, jsonify, request, abort, make_response, session
from flask_restful import Resource
from models import User, Show, Rental, ArtistBooking, Review
from config import app, db, api



class Signup(Resource):
    def post(self):
        # try:
            data = request.get_json()
            new_user = User(
                username = data['username'],
                account_type = data['account_type']
            )
            new_user.password_hash = data['password']
            db.session.add(new_user)
            db.session.commit()
            session['user_id'] = new_user.user_id
            return make_response(new_user.to_dict(), 201)
        # except:
        #     return make_response({'errors':['validation errors']}, 400)

class Login(Resource):
    def post(self):
        data = request.get_json()
        user = User.query.filter(User.username == data['username']).first()
        if user:
            if user.authenticate(data['password']):
                print(user.username)
                print(user.user_id)
                session['user_id'] = user.user_id
                return user.to_dict(), 201
            else:
                return {"error": "Invalid Password"}, 401
        else:
            return {"error": "Invalid Username"}, 401
        
class Logout(Resource):
    def delete(self):
        user_id = session['user_id']
        if user_id:
            session['user_id'] = None
            return {}, 204
        else:
            return {"error": "No user logged in currently"}, 401


        
api.add_resource(Signup, '/signup')
api.add_resource(Login, '/login')
api.add_resource(Logout, '/logout')

# Route to get all reviews
@app.route('/reviews', methods=['GET'])
def get_all_reviews():
    reviews = Review.query.all()
    return jsonify([review.__dict__ for review in reviews])

# Route to Post a review
@app.route('/reviews', methods=['POST'])
def post_review():
    if not request.json:
        abort(400)
    review = Review(
        writer_id=request.json['writer_id'],
        accomodations_id=request.json['accomodations_id'],
        rating=request.json['rating'],
        comment=request.json['comment']
    )
    db.session.add(review)
    db.session.commit()
    return jsonify(review.__dict__), 201

#Route to delete a review
@app.route('/reviews/<int:review_id>', methods=['DELETE'])
def delete_review(review_id):
    review = Review.query.filter_by(review_id=review_id).first()
    if not review:
        abort(404)
    db.session.delete(review)
    db.session.commit()
    return jsonify({'result': True})


# Route to get all artist bookings
@app.route('/artist_bookings', methods=['GET'])
def get_all_artist_bookings():
    artist_bookings = ArtistBooking.query.all()
    return jsonify([a.__dict__ for a in artist_bookings])

# Route to get all shows
@app.route('/shows', methods=['GET'])
def get_all_shows():
    shows = Show.query.all()
    return jsonify([show.__dict__ for show in shows])



# ... Other configurations for Flask and SQLAlchemy ...

# Route to get all rentals
@app.route('/rentals', methods=['GET'])
def get_all_rentals():
    rentals = Rental.query.all()
    return jsonify([a.__dict__ for a in rentals])

# Route to create a new accommodation
@app.route('/rentals', methods=['POST'])
def create_rental():
    data = request.json

# Extract data from the request JSON
    location = data.get('location')
    beds = data.get('beds')
    baths = data.get('baths')
    sq_ft = data.get('sq_ft')
    description = data.get('description')
    availability_dates = data.get('availability_dates')

# Perform some basic validation on the input data, you can add more checks as per your requirements.
    if not location or not beds or not baths or not sq_ft or not description or not availability_dates:
        return jsonify({'error': 'Please provide all required fields.'}), 400

    rental = Rental(
        location=location,
        beds=beds,
        baths=baths,
        sq_ft=sq_ft,
        description=description,
        availability_dates=availability_dates
    )

    db.session.add(rental)
    db.session.commit()

    return jsonify({'message': 'Rental created successfully.'}), 201

# Route to get a specific accommodation
@app.route('/rental/<int:rental_id>', methods=['GET'])
def get_rental(rental_id):
    rental = Rental.query.get(rental_id)

    if not rental:
        return jsonify({'error': 'Rental not found.'}), 404

    return jsonify(rental.__dict__)

# Route to partially update an existing rental using PATCH
@app.route('/rentals/<int:rental_id>', methods=['PATCH'])
def patch_rental(rental_id):
    rental = Rental.query.get(rental_id)

    if not rental:
        return jsonify({'error': 'Rental not found.'}), 404

    data = request.json

# Update the rental fields with the new data
    for key, value in data.items():
        setattr(rental, key, value)

    db.session.commit()

    return jsonify({'message': 'Rental updated successfully.'})

# Route to delete an rental
@app.route('/rentals/<int:rental_id>', methods=['DELETE'])
def delete_rental(rental_id):
    rental = Rental.query.get(rental_id)

    if not rental:
        return jsonify({'error': 'Rental not found.'}), 404

    db.session.delete(rental)
    db.session.commit()

    return jsonify({'message': 'Rental deleted successfully.'})

if __name__ == '__main__':
    app.run(port=5555, debug=True)
