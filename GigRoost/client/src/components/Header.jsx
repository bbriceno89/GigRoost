import React from "react";
import NavBar from "./NavBar";
import logo from "../assets/chicken-coop-icon-hen-house-png-image.png"; 

function Header() {
  return (
    <div className="bg-pallette1 px-4 py-2 rounded-lg flex items-center justify-between">
      <div className="flex items-center ml-auto pr-10">
        <h1 className="text-pallette6 text-3xl font-bold mr-4">GigRoost</h1>
        <div className="bg-gray-700 p-0 rounded-full overflow-hidden"> 
          <img src={logo} alt="Chicken Logo" className="w-32 h-32 object-contain aspect-w-1 aspect-h-1" />
        </div>
      </div>
      <NavBar />
    </div>
  );
}

export default Header;