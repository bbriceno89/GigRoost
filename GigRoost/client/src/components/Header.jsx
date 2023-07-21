import React from "react";
import NavBar from "./NavBar";
import logo from "../assets/chicken-coop-icon-hen-house-png-image.png"; 
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  function handleReturn() {
    navigate('/', {replace: true});
  }

  return (
    <div className="bg-pallette1 px-4 py-2 rounded-lg flex items-center justify-between">
      <h1
        onClick={handleReturn}
        className="text-pallette6 text-3xl font-bold mr-4 cursor-pointer"
      >
        GigRoost
      </h1>
      <div className="rounded-full overflow-hidden w-16 h-11 pr-2">
        <img
          src={logo}
          alt="Chicken Logo"
          className="w-full h-full object-contain"
        />
      </div>
      <NavBar />
    </div>
  );
}

export default Header;