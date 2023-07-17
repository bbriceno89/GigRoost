from flask import Flask, jsonify, request, abort
from models import db, models

app = Flask(__name__)

# Route to get all reviews
@app.route('/reviews', methods=['GET'])
def get_all_reviews():
    reviews = models.Review.query.all()
    return jsonify([review.__dict__ for review in reviews])

# Route to Post a review
@app.route('/reviews', methods=['POST'])
def post_review():
    if not request.json:
        abort(400)
    review = models.Review(
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
    review = models.Review.query.filter_by(review_id=review_id).first()
    if not review:
        abort(404)
    db.session.delete(review)
    db.session.commit()
    return jsonify({'result': True})


# Route to get all artist bookings
@app.route('/artist_bookings', methods=['GET'])
def get_all_artist_bookings():
    artist_bookings = models.ArtistBooking.query.all()
    return jsonify([a.__dict__ for a in artist_bookings])

# Route to get all shows
@app.route('/shows', methods=['GET'])
def get_all_shows():
    shows = models.Show.query.all()
    return jsonify([show.__dict__ for show in shows])


if __name__ == '__main__':
    app.run()

