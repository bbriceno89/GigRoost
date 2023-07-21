import React from "react";



function Card({ item }) {
  const handleClick = () => {
    window.location.href = `/rentals/${item.rental_id}`;
  };


  const desc_preview = item.description.slice(0, 64) + "...";

  return (
    <div key={item.rental_id} className="bg-white p-2 shadow-md" onClick={handleClick}>
      <img
        src={item.image_url || "/fallback-image.jpg"}
        alt={`Rental Item ${item.rental_id}`}
        className="w-full h-fit object-cover mb-2"
      />

      <p
        className="text-base text-left"
        style={{ color: "black", fontWeight: "bold" }}
      >
        {desc_preview}
      </p>
    </div>
  );
}

export default Card;
