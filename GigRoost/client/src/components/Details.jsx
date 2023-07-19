import React from 'react';

function Details() {

    return (
    <div>
      <div className="Available Roosts">
        {/* Availability Calendar or Date Selection Component */}
        <h2>Select Dates:</h2>
        {/* Include your date selection component here */}
        {/* e.g., <CalendarComponent /> */}
        <button>Check Availability</button>
      </div>
      <div className="image-container">
        <img src="apartment-image.jpg" alt="Apartment" />
      </div>
      <div className="description">
        <h2>Apartment Name/Number</h2>
        <p>
          [Apartment Description]
        </p>
      </div>
    </div>
  );
};

export default Details;
