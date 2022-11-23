import React from "react";
import { Link } from 'react-router-dom';

import './navbar.css'

function NavBar() {
    return (
    <nav className="navbar">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/projects">Projects</Link>
        <Link className="nav-link" to="/about-me">About Me</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
    </nav>
    )
}

export default NavBar;