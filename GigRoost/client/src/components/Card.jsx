import React from "react";

function Card(item) {
    return(
        <div key={item.rental_id} className="bg-white p-2 shadow-md">
            <img
              src={item.image_url || '/fallback-image.jpg'}
              alt={`Rental Item ${item.rental_id}`}
              className="w-full h-36 object-cover mb-2"
            />
            <p className="text-base text-center" style={{ color: 'black', fontWeight: 'bold' }}>
              {item.description}
            </p>
        </div>

    )
}

export default Card;