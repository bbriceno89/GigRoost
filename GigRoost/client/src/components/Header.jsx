import React from "react";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate()

  function handleReturn() {
    navigate('/', {replace: true})
  }

  return (
    <>
      <h1 onClick={handleReturn}
      className="bg-pallette1 
      text-left 
      text-pallette6 
      text-3xl 
      font-bold 
      w-screen h-14 
      px-2 py-4 cursor-pointer">
        GigRoost
      </h1>
      <NavBar />
    </>
  );
}

export default Header;
