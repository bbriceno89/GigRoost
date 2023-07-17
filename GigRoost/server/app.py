from flask import Flask, jsonify, request, abort
from models import db, Base, models

app = Flask(__name__)

# ... Other configurations for Flask and SQLAlchemy ...

# Route to get all accommodations
@app.route('/accommodations', methods=['GET'])
def get_all_accommodations():
    accommodations = models.Accommodation.query.all()
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

    accommodation = models.Accommodation(
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
    accommodation = models.Accommodation.query.get(accommodation_id)

    if not accommodation:
        return jsonify({'error': 'Accommodation not found.'}), 404

    return jsonify(accommodation.__dict__)

# Route to partially update an existing accommodation using PATCH
@app.route('/accommodations/<int:accommodation_id>', methods=['PATCH'])
def patch_accommodation(accommodation_id):
    accommodation = models.Accommodation.query.get(accommodation_id)

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
    accommodation = models.Accommodation.query.get(accommodation_id)

    if not accommodation:
        return jsonify({'error': 'Accommodation not found.'}), 404

    db.session.delete(accommodation)
    db.session.commit()

    return jsonify({'message': 'Accommodation deleted successfully.'})

if __name__ == '__main__':
    app.run()
