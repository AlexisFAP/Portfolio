import React from "react";
import { Link } from 'react-router-dom';

import '../../App.css'
import './footer.css'

function Footer() {
    return (
    <footer className="footer">
        <div className="container">
            <div className="container-content">
                <div className="item">
                    <p>Portfolio</p>
                    <p>Description</p>
                </div>
                <div className="item">
                    <p>Menu</p>
                    <Link className="footer-link" to="/">Home</Link>
                    <Link className="footer-link" to="/projects">Projects</Link>
                    <Link className="footer-link" to="/about-me">About Me</Link>
                    <Link className="footer-link" to="/contact">Contact</Link>
                </div>
                <div className="item">
                    <p>Information</p>
                    <p>email: alexispatinoagudelo@gmail.com</p>
                    <p>Cellphone: +57 3116608665</p>
                    <p>Linkedin: www.linkedin.com/in/alexis-patiño-agudelo-5a74791b9</p>
                    <p>Github: https://github.com/AlexisFAP</p>
                </div>
            </div>
            <div className="container-content">
                <h1>Iconos</h1>
            </div>
        </div>
    </footer>
    )
}

export default Footer;