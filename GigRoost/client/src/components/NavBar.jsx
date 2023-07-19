import React from "react";

function NavBar() {
  const UserNav = "pass";
  const noUserNav = (
    <>
        <li className="text-center px-4 py-4">
        <a href="">Signup</a>
        </li>
        <li className="text-center px-4 py-4">
            <a href="">Login</a>
        </li>
    </>
  );

  return (
    <nav className=" text-pallette6 bg-pallette2 w-screen text-right inline-flex flex-row-reverse">{noUserNav}</nav>
  );
}

export default NavBar;
