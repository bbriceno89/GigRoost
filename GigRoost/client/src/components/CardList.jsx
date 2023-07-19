import React, { useEffect, useState } from 'react';

const CardList = () => {
  const [rentalItems, setRentalItems] = useState([]);

  useEffect(() => {
    // Fetch rental items from the server
    fetch('http://127.0.0.1:5555/rentals?limit=4')
      .then((response) => response.json())
      .then((data) => {
        const first4Items = data.slice(0,4);
        setRentalItems(first4Items);
      })
      .catch((error) => {
        console.error('Error fetching rental data:', error);
      });
  }, []);
  
  return (
    <div className="bg-pallette1 w-fill h-fit mx-20 my-20">
      <h2 className="text-pallette6 text-3xl font-bold text-center pt-12">
        Find a Place to Crash
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {rentalItems.map((item) => (
          <div key={item.rental_id} className="bg-white p-2 shadow-md card">
            <img
              src={item.image_url || '/fallback-image.jpg'}
              alt={`Rental Item ${item.rental_id}`}
              className="w-full h-36 object-cover mb-2"
            />
            <p className="text-base text-center" style={{ color: 'white', fontWeight: 'bold' }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;