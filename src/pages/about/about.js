import React from "react";

import '../../App.css'
import './about.css'

function About() {
    return (
        <div className="about">
            <div className="about-title">About me</div>
            <div className="about-container">
                <div className="subcontainer">
                    <div className="subtitle">Fullstack Developer / Frontend - Backend</div>
                    <div className="text">Hi, i'm Alexis a System Engineering Student of the University of Medellín,
                        i like building Web Apps and learning new technologies because of the satisfaction i get by overcoming challenges.
                    </div>
                    <button className="btn"><img src="file-download.png" alt="file-download.png" /> Download CV</button>
                </div>
                <div className="subcontainer">
                    <div className="subtitle">Skills & Technologies</div>
                    <div className="about-img-container">
                        <div><img className="about-img" src="js.png" alt="js.png" /><div className="text"> Javascript</div></div>
                        <div><img className="about-img" src="css.png" alt="css.png" /><div className="text"> Css</div></div>
                        <div><img className="about-img" src="html.png" alt="html.png" /><div className="text"> Html</div></div>
                        <div><img className="about-img" src="react.png" alt="react.png" /><div className="text"> React</div></div>
                        <div><img className="about-img" src="nuxt.png" alt="nuxt.png" /><div className="text"> Nuxt.js</div></div>
                        <div><img className="about-img" src="node.png" alt="node.png" /><div className="text"> Node.js</div></div>
                        <div><img className="about-img" src="express.png" alt="express.png" /><div className="text"> Express.js</div></div>
                        <div><img className="about-img" src="mongo.png" alt="mongo.png" /><div className="text"> MongoDB</div></div>
                        <div><img className="about-img" src="postgres.png" alt="postgres.png" /><div className="text"> PostgreSQL</div></div>
                        <div><img className="about-img" src="git.png" alt="git.png" /><div className="text"> Git</div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;