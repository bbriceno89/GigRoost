import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ item }) {
  const navigate = useNavigate()
  function handleClick() {
    navigate(`/rentals/${item.rental_id}`,{replace:true});
  };

  const baths = Math.round(item.baths * 2)/2

  return(
      <div onClick={handleClick} className="overflow-hidden rounded-xl relative h-72 shadow-lg group cursor-pointer">
        <img
          src={item.image_url || '/fallback-image.jpg'}
          alt={`Rental Item ${item.rental_id}`}
          className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-200"
        />
        <div className="p-4 absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-pallette4/95 to-transparent translate-y-14 group-hover:translate-y-0 transition-all">
          <h2 className="text-pallette6 text-xl font-semibold" >{item.location}</h2>
          <h3 className="text-pallette5 text-sm w-40">{item.beds} Beds</h3>
          <h3 className="text-pallette5 text-sm w-40">{baths} Baths</h3>
        </div>
      </div>
  )
}

export default Card;