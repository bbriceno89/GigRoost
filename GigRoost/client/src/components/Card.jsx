import React from "react";

function Card({ item, onClick }) {

  const desc_preview = item.description.slice(0, 64) + "..."

  return (
    <div className="overflow-hidden rounded-xl relative h-72 shadow-lg group" onClick={onClick}>
      <img
        src={item.image_url || '/fallback-image.jpg'}
        alt={`Rental Item ${item.rental_id}`}
        className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-200"
      />
      <div className="p-4 absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-pallette4/95 to-transparent translate-y-1/4 group-hover:translate-y-0 transition-all">
        <h2 className="text-pallette6 text-xl font-semibold">{item.location}</h2>
        <h3 className="text-pallette5 text-sm w-40">{desc_preview}</h3>
      </div>
    </div>
  );
}

export default Card;
