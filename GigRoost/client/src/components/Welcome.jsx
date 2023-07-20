import React from "react";
import Login from "./Login";
import Signup from "./Signup";

function Welcome() {
  return (
    <div 
    className=" bg-pallette1 rounded-lg
    w-fill h-fit 
    mx-20 my-20">
        <h2 className="text-pallette6 text-3xl font-bold text-center py-12">
            Welcome to GigRoost
        </h2>
        <p className="text-pallette6 font-semibold text-center mx-16 pb-12">GigRoost makes touring cheap and easy! Find a place to stay near your venue, or offer your place in exchange for tickets! With GigRoost, you are helping to bring together the music community!</p>
    </div>
  );
}

export default Welcome;