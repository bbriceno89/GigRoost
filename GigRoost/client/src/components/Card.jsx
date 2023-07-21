import React from "react";



function Card({ item }) {
  const handleClick = () => {
    window.location.href = `/rentals/${item.rental_id}`;
  };


<<<<<<< HEAD
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
=======
    return(
        <div className="overflow-hidden rounded-xl relative h-72 shadow-lg group">
          <img
            src={item.image_url || '/fallback-image.jpg'}
            alt={`Rental Item ${item.rental_id}`}
            className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-200"
          />
          <div className="p-4 absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-pallette4/95 to-transparent translate-y-1/4 group-hover:translate-y-0 transition-all">
            <h2 className="text-pallette6 text-xl font-semibold" >{item.location}</h2>
            <h3 className="text-pallette5 text-sm w-40">{desc_preview}</h3>
          </div>
        </div>
    )
>>>>>>> main
}

export default Card;
