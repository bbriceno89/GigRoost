import React from "react";

function Card({ item }) {

    const desc_preview = item.description.slice(0, 64) + "..."

    return(
        <div className="overflow-hidden rounded-xl relative h-72 shadow-lg group">
          <img
            src={item.image_url || '/fallback-image.jpg'}
            alt={`Rental Item ${item.rental_id}`}
            className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-200"
          />
          <div className="p-4 absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-pallette4/95 to-transparent translate-y-[25%] group-hover:translate-y-0 transition-all">
            <h2 className="text-pallette6 text-xl font-semibold" >{item.location}</h2>
            <p className="text-pallette5 text-sm">{desc_preview}</p>
          </div>
        </div>
    )
}

export default Card;