import React, { useEffect, useState } from 'react';
import Card from './Card';

const CardList = () => {
  const [rentalItems, setRentalItems] = useState([]);


  useEffect(() => {
    // Fetch rental items from the server
    fetch('/api/rentals?limit=8')
      .then((response) => response.json())
      .then((data) => {
        setRentalItems(data);
      })
      .catch((error) => {
        console.error('Error fetching rental data:', error);
      });
  }, []);
  
  return (
    <div className="bg-pallette1 w-fill h-4/5 mx-7 my-5 overflow-y-scroll no-scrollbar">
      <h2 className="text-pallette6 text-3xl font-bold text-center pt-5 bg-pallette1">
        Find a Place to Crash
      </h2>
      <div className="grid gap-4 grid-cols-4 py-7 px-3">
        {rentalItems.map((item) => <Card item={item} key={item.rental_id}/> )}
      </div>
    </div>
  );
};

export default CardList;