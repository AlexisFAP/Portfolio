import React from "react";
import { Link } from 'react-router-dom';

import '../../App.css'
import './footer.css'

function Footer() {
    return (
    <footer className="footer">
        <div className="container">
            <div className="container-row">
                <div className="row-item row-3">
                    <h3>Portfolio</h3>
                    <div>Description: Lorem Ipsum is simply dummy text of the 
                        printing and typesetting industry. Lorem Ipsum has been 
                        the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and 
                        scrambled it to make a type specimen book.
                    </div>
                </div>
                <div className="row-item row-3">
                    <h3>Menu</h3>
                    <ul>
                        <li><Link className="footer-link" to="/">Home</Link></li>
                        <li><Link className="footer-link" to="/projects">Projects</Link></li>
                        <li><Link className="footer-link" to="/about-me">About Me</Link></li>
                        <li><Link className="footer-link" to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="row-item row-3">
                    <h3>Information</h3>
                    <ul>
                        <li><div>email: alexispatinoagudelo@gmail.com</div></li>
                        <li><div>Cellphone: +57 3116608665</div></li>
                        <li><div><a href="https://www.linkedin.com/in/alexis-patiño-agudelo-5a74791b9" target="_blank">Linkedin: www.linkedin.com/in/alexis-patiño-agudelo</a></div></li>
                        <li><div><a href="https://github.com/AlexisFAP" target="_blank">Github: github.com/AlexisFAP</a> </div></li>
                    </ul>
                </div>
            </div>
            <hr></hr>
            <div className="container-row">
                <a href="https://www.linkedin.com/in/alexis-patiño-agudelo-5a74791b9" target="_blank"><i class="bi bi-linkedin"></i></a>
                <a href="https://github.com/AlexisFAP" target="_blank"><i class="bi bi-github"></i></a>
            </div>
        </div>
    </footer>
    )
}

export default Footer;