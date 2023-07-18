import React from "react";
import NavBar from "./NavBar";

function Header() {
  return (
    <>
      <h1 className=" text-left w-screen h-14 bg-pallette1 text-2xl text-pallette6 font-bold px-2 py-4">
        GigRoost
      </h1>
      <NavBar />
    </>
  );
}

export default Header;
