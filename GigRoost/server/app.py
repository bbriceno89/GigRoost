from flask import Flask, jsonify, request, abort, make_response, session
from flask_restful import Resource
from models import User, Show, Accommodation, ArtistBooking, Review
from config import app, db, api



class Signup(Resource):
    def post(self):
        try:
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
        except:
            return make_response({'errors':['validation errors']}, 400)

class Login(Resource):
    def post(self):
        data = request.get_json()
        user = User.query.filter(User.username == data['username']).first()
        if user:
            if user.authenticate(data['password']):
                session['user_id'] = user.id
                return user.to_dict(), 201
            else:
                return {"error": "Invalid Password"}, 401
        else:
            return {"error": "Invalid Username"}, 401

        
api.add_resource(Signup, '/signup')
api.add_resource(Login, '/login')

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

# Route to get all accommodations
@app.route('/accommodations', methods=['GET'])
def get_all_accommodations():
    accommodations = Accommodation.query.all()
    return jsonify([a.__dict__ for a in accommodations])

# Route to create a new accommodation
@app.route('/accommodations', methods=['POST'])
def create_accommodation():
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

    accommodation = Accommodation(
        location=location,
        beds=beds,
        baths=baths,
        sq_ft=sq_ft,
        description=description,
        availability_dates=availability_dates
    )

    db.session.add(accommodation)
    db.session.commit()

    return jsonify({'message': 'Accommodation created successfully.'}), 201

# Route to get a specific accommodation
@app.route('/accommodations/<int:accommodation_id>', methods=['GET'])
def get_accommodation(accommodation_id):
    accommodation = Accommodation.query.get(accommodation_id)

    if not accommodation:
        return jsonify({'error': 'Accommodation not found.'}), 404

    return jsonify(accommodation.__dict__)

# Route to partially update an existing accommodation using PATCH
@app.route('/accommodations/<int:accommodation_id>', methods=['PATCH'])
def patch_accommodation(accommodation_id):
    accommodation = Accommodation.query.get(accommodation_id)

    if not accommodation:
        return jsonify({'error': 'Accommodation not found.'}), 404

    data = request.json

# Update the accommodation fields with the new data
    for key, value in data.items():
        setattr(accommodation, key, value)

    db.session.commit()

    return jsonify({'message': 'Accommodation updated successfully.'})

# Route to delete an accommodation
@app.route('/accommodations/<int:accommodation_id>', methods=['DELETE'])
def delete_accommodation(accommodation_id):
    accommodation = Accommodation.query.get(accommodation_id)

    if not accommodation:
        return jsonify({'error': 'Accommodation not found.'}), 404

    db.session.delete(accommodation)
    db.session.commit()

    return jsonify({'message': 'Accommodation deleted successfully.'})

if __name__ == '__main__':
    app.run(port=5555, debug=True)
