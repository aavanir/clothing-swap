import React from "react";
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/messages">Messages</Link>
            <Link to="/account">Account</Link>
        </nav>
    );
}

export default NavBar;