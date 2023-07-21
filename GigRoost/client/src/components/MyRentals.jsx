import React, { useContext, useEffect, useState } from 'react';
import Card from './Card';
import { UserContext } from './context/UserContext';

const MyRentals = () => {
  const [rentalItems, setRentalItems] = useState([]);
  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    // Fetch rental items from the server
    fetch('/api/rentals')
      .then((response) => response.json())
      .then((data) => {
        setRentalItems(data)
      })
      .catch((error) => {
        console.error('Error fetching rental data:', error);
      });
  }, []);
  return (
    <div className="bg-pallette1 w-fill h-4/5 mx-7 my-5 overflow-y-scroll no-scrollbar">
      <h2 className="text-pallette6 text-3xl font-bold text-center pt-5 bg-pallette1">
        My Listings
      </h2>
      <div className="grid gap-4 grid-cols-4 py-7 px-3">
        {rentalItems.map((item) => <Card item={item} key={item.rental_id}/> )}
      </div>
    </div>
  );
};

export default MyRentals;