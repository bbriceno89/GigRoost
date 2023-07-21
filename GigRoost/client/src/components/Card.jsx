import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CardList from "./CardList";
import Card from "./Card";


function Details() {

  const [rentalDescription, setRentalDescription] = useState("");
  const [rentalImage, setRentalImage] = useState("");
  const [rentalBeds, setRentalBeds] = useState([]);
  const [rentalBaths, setRentalBaths] = useState([]);
  const [availabilityDates, setAvailabilityDates] = useState("");



  const { id } = useParams();  
  console.log(id);

  useEffect(() => {
    // Fetch rental items from the server
    fetch(`/api/rentals/${id}`)
      .then((response) => response.json())
      .then((data) => {
     console.log(data);
        setRentalDescription(data.description);
        setRentalImage(data.image_url);
        setRentalBeds(data.beds);
        setRentalBaths(data.baths);
       
      })
      .catch((error) => {
        console.error('Error fetching rental data:', error);
      });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setAvailabilityDates(value);
    setEndAvailabilityDates(value);
  }
;

  
  

  return (
    <>
      <div className="flex flex-col w-screen h-screen">
        <div className="bg-pallette1 flex justify-center items-center py-4">
        <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Check Availability</button>

          <input
            type="date"
            id="start"
            name="trip-start"
            value= {availabilityDates}
            className="border border-gray-400 rounded-lg px-3 py-2 mr-2 mb-2"
            onChange = {handleChange}
          ></input>
        
        </div>

        <div className="flex-1 flex">
          <div className="w-1/2 h-full">
            <div className="h-full bg-gray-300">
              <img
               src={rentalImage} 
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="w-1/2 h-full">
            <div className="h-full bg-pallette1 border border-gray-500 p-4 overflow-auto">
              <h2 className="text-2xl font-bold mb-4">Apartment</h2>
              <div>
              <p className="text-lg">{rentalDescription}</p>
              <p className="text-lg">Beds:  {rentalBeds}</p>
              <p className="text-lg">Baths:  {Math.round(rentalBaths)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;