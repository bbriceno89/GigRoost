import React from "react";
import { useState } from "react";
import CardList from "./CardList";

function Details({ selectedItem }) {


  return (
    <>
      <div className="flex flex-col w-screen h-screen">
        <div className="bg-pallette1 flex justify-center items-center py-4">
          <button
            type="button"
            className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            Dates
          </button>
          <input
            type="date"
            id="start"
            name="trip-start"
            value= ""
            className="border border-gray-400 rounded-lg px-3 py-2 mr-2 mb-2"
          ></input>
          <button
            type="button"
            className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            Check Availability
          </button>
        </div>

        <div className="flex-1 flex">
          <div className="w-1/2 h-full">
            <div className="h-full bg-gray-300">
              <img
               /* src={selectedItem.image_url || "/fallback-image.jpg"} */
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="w-1/2 h-full">
            <div className="h-full bg-pallette1 border border-gray-500 p-4 overflow-auto">
              <h2 className="text-2xl font-bold mb-4">Apartment</h2>
              <p className="text-lg">{/*selectedItem.description*/}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
