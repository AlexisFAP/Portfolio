import React from "react";

import '../../App.css'
import './about.css'

function About() {
    return (
        <div>
            <div className="about-title">About me</div>
            <div className="about-container">
                <div className="subcontainer">
                    <div className="subtitle">Fullstack Developer / Frontend - Backend</div>
                    <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book.</div>
                    <button className="btn">Download CV</button>
                </div>
                <div className="subcontainer">
                    <div className="subtitle">Skills & Technologies</div>
                    <h2>HERE ICONS</h2>
                </div>
            </div>
        </div>
    )
}

export default About;