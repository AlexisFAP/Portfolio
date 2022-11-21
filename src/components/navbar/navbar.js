import React from "react";
import { Link } from 'react-router-dom';

import './navbar.css'

function NavBar() {
    return (
    <nav>
        <Link className="nav-link" to="/">Home</Link>
    </nav>
    )
}

export default NavBar;