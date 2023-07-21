import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import chickenHoodGuitar from "../assets/chicken-hood-guitar.gif";

function Welcome() {
  return (
    <div className="bg-pallette1 rounded-xl w-fill h-fit mx-20 my-20 p-8">
      <h2 className="text-pallette6 text-3xl font-bold text-center py-4">
        Welcome to GigRoost
      </h2>
      <div className="flex flex-col items-center my-4">
        <img
          src={chickenHoodGuitar}
          alt="Chicken with a Hood Playing Guitar"
          className="mx-auto"
        />
        <div className="text-pallette6 font-semibold text-center mx-8 my-8"> 
          <p className="text-2xl font-bold mb-4">
            GigRoost makes touring cheap and easy!
          </p>
          <p className="ml-4">Find a place to stay near your venue, or offer your place in exchange for tickets!</p>
          <p className="ml-4">With GigRoost, you are helping to bring together the music community!</p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
