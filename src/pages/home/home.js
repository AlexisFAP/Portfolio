import React from "react";

import '../../App.css'
import './home.css'

function Home() {
    return(
        <div className="card">
            <div className="card-title">HOME</div>
            <div className="card-text">Portfolio - Alexis Patiño</div>
            <div className="card-text">This page was created by me (Alexis Patiño Agudelo) and it is so that people 
            can see my skills and projects that carried out.
        </div>
            <img className="card-img" src="./profile.jpg" alt="profile" />
        </div>
    )
}

export default Home;