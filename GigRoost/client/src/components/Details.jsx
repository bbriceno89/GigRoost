import React from 'react';
import { useState } from 'react';


function Details() {
    
    return (
    <div>
      <div className="Available Roosts">
        <button>Select Dates:</button>
        <input type="date" id="start" name="trip-start"
         value="2021-07-22">
         </input>
        <button>Check Availability</button>

      </div>
      <div className="image-container">
        <img src="apartment-image.jpg"alt="Apartment" />
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
