import React, { useEffect, useState } from 'react';
import Card from './Card';

const CardList = () => {
  const [rentalItems, setRentalItems] = useState([]);

  useEffect(() => {
    // Fetch rental items from the server
    fetch('/api/rentals?limit=8')
      .then((response) => response.json())
      .then((data) => {
        const first8Items = data.slice(0,8);
        setRentalItems(first8Items);
      })
      .catch((error) => {
        console.error('Error fetching rental data:', error);
      });
  }, []);
  
  return (
    <div className="bg-pallette1 w-fill h-fill mx-7 my-5">
      <h2 className="text-pallette6 text-3xl font-bold text-center pt-5">
        Find a Place to Crash
      </h2>
      <div className="grid grid-cols-4 gap-4">
        {rentalItems.map((item) => <Card item={item} key={item.rental_id}/> )}
      </div>
    </div>
  );
};

export default CardList;