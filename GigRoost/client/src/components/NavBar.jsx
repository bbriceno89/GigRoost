import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

function NavBar() {
  const { user, setUser } = useContext(UserContext)

  function handleLogout() {
    fetch('/api/logout', {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json'
      }
    })
    setUser(null)
  }

  const userNav = (
    <li onClick={handleLogout} className="text-center px-4 py-4">
      <a href="/">Logout</a>
    </li>

  );

  const hostNav = (
    <>
      <li className="text-center px-4 py-4">
        <a href="">My Listings</a>
      </li>
      <li className="text-center px-4 py-4">
        <a href="">New Listing</a>
      </li>
    </>
  )

  const noUserNav = (
    <>
        <li className="text-center px-4 py-4">
        <a href="/signup">Signup</a>
        </li>
        <li className="text-center px-4 py-4">
            <a href="/login">Login</a>
        </li>
    </>
  );

  return (
    <nav className=" text-pallette6 bg-pallette2 w-screen text-right inline-flex flex-row-reverse">{!user ? noUserNav : userNav}</nav>
  );
}

export default NavBar;
