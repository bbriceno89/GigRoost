import React from "react";
import Login from "./Login";
import ChooseAccount from "./ChooseAccount";
import Signup from "./Signup";

function Welcome(){
    return (
        <>
            <h2>GigRoost</h2>
            <Login/>
            <ChooseAccount/>
            <Signup/>
        </>
    )
}

export default Welcome;