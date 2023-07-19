import React from 'react';

const rentalItems = [
  {
    id: 1,
    image_url: 'image1.jpg',
    description: 'Description of Item 1',
  },
  {
    id: 2,
    image_url: 'image2.jpg',
    description: 'Description of Item 2',
  },
  {
    id: 3,
    image_url: 'image3.jpg',
    description: 'Description of Item 3',
  },
  {
    id: 4,
    image_url: 'image4.jpg',
    description: 'Description of Item 4',
  },
];

const CardList = () => {
  return (
    <div className="bg-pallette1 w-fill h-fit mx-20 my-20">
      <h2 className="text-pallette6 text-3xl font-bold text-center pt-12">
        Find a Place to Crash
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {rentalItems.map((item) => (
          <div key={item.id} className="bg-white p-2 shadow-md">
            <img
              src={item.image_url}
              alt={`Rental Item ${item.id}`}
              className="w-full h-36 object-cover mb-2"
            />
            <p className="text-pallette6 text-base text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
