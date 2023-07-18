import React from "react";

function NavBar(){

    const UserNav = "pass"
    const noUserNav = (
        <li>
            <a href="">Signup</a>
        </li>
    )

    return (
        <nav>
           {noUserNav}
        </nav>
    )
}

export default NavBar;