import React from 'react';
import { useState } from 'react';


function Details() {
    const [rental, SetRental] = useState(null);
    

    return (
    <div>
      <div className="Available Roosts">
        <h2>Select Dates:</h2>
        <button>Check Availability</button>
      </div>
      <div className="image-container">
        <img src={item.image_url} alt="Apartment" />
      </div>
      <div className="description">
        <h2>Apartment Name/Number</h2>
        <textarea>
            {item.description}
          [Apartment Description]
        </textarea>
      </div>
    </div>
  );
};

export default Details;
