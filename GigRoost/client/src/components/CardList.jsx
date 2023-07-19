import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CardList = () => {
  const [rentalItems, setRentalItems] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    axios.get('http://127.0.0.1:5555/rentals')
      .then((response) => {
        setRentalItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching rental data:', error);
      });
  }, []);

  const firstEightItems = rentalItems.slice(0, 8);

  // Function to fetch a random image from Unsplash
  const fetchRandomImage = async () => {
    try {
      const response = await axios.get('https://source.unsplash.com/featured/?house,apartment');
      return response.request.responseURL;
    } catch (error) {
      console.error('Error fetching random image:', error);
      return null;
    }
  };

  // Function to assign a random image URL to each rental item
  const assignRandomImages = async () => {
    const itemsWithRandomImages = await Promise.all(
      firstEightItems.map(async (item) => {
        const randomImageUrl = await fetchRandomImage();
        return {
          ...item,
          randomImageUrl,
        };
      })
    );
    setRentalItems(itemsWithRandomImages);
  };

  useEffect(() => {
    assignRandomImages();
  }, [firstEightItems]); // Run the assignment whenever firstEightItems changes

  return (
    <div className="bg-pallette1 w-fill h-fit mx-20 my-20">
      <h2 className="text-pallette6 text-3xl font-bold text-center pt-12">
        Find a Place to Crash
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {rentalItems.map((item) => (
          <div key={item.rental_id} className="bg-white p-2 shadow-md">
            <img
              src={item.randomImageUrl || '/fallback-image.jpg'}
              alt={`Rental Item ${item.rental_id}`}
              className="w-full h-36 object-cover mb-2"
            />
            <p className="text-base text-center" style={{ color: 'black', fontWeight: 'bold' }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;