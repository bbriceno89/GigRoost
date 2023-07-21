import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    fetch('/api/logout', {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(() => {
      setUser(null);
      navigate('/', { replace: true }); // Redirect to the welcome page after logout
    });
  }
  
  const hostNav = (
    <>
      <li className="text-center px-4 py-4">
        <a href="/my_rentals">My Listings</a>
      </li>
      <li className="text-center px-4 py-4">
        <a href="/rentals/new">New Listing</a>
      </li>
    </>
  )

    const artistNav = (
      <>
      <li className="text-center px-4 py-4">
        <a href="">Add a Show</a>
      </li>
      <li className="text-center px-4 py-4">
        <a href="">Leave a Review</a>
      </li>
      </>
    )

  const userNav = (
    <>
      <li className="text-center px-4 py-4">
        <a href="/" onClick={handleLogout} >Logout</a>
      </li>
      {(user?.account_type === "host") ? hostNav : artistNav}
    </>

  );


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
    <nav className="text-pallette6 bg-pallette2 w-screen text-right inline-flex flex-row-reverse px-2">
      {!user ? noUserNav : userNav}
    </nav>
  );
}

export default NavBar;