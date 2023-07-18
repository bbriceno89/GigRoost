import React from "react";
import NavBar from "./NavBar";

function Header() {
  return (
    <>
      <h1 
      className="bg-pallette1 
      text-left 
      text-pallette6 
      text-3xl 
      font-bold 
      w-screen h-14 
      px-2 py-4">
        GigRoost
      </h1>
      <NavBar />
    </>
  );
}

export default Header;
