import React from "react";
import Login from "./Login";
import ChooseAccount from "./ChooseAccount";
import Signup from "./Signup";

function Welcome() {
  return (
    <div 
    className=" bg-pallette1
    w-fill h-fit 
    mx-20 my-20">
        <h2 className="text-pallette6 text-3xl font-bold text-center pt-12">
            Welcome to GigRoost
        </h2>
        <Login />
        <ChooseAccount />
        <Signup />
    </div>
  );
}

export default Welcome;
