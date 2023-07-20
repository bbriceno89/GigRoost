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
      <img
        src={chickenHoodGuitar}
        alt="Chicken with a Hood Playing Guitar"
        className="mx-auto"
      />
      <div className="text-pallette6 font-semibold text-center mx-8 pb-4">
        <p>GigRoost makes touring cheap and easy!</p>
        <p>Find a place to stay near your venue, or offer your place in exchange for tickets!</p>
        <p>With GigRoost, you are helping to bring together the music community!</p>
      </div>
    </div>
  );
}

export default Welcome;
