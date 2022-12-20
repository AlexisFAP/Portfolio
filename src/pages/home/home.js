import React from "react";

import '../../App.css'
import './home.css'

function Home() {
    return(
        <div className="card">
            <div className="card-container">
                <div className="card-title">Alexis Patiño</div>
                <div className="card-text">FullStack Developer</div>
            </div>
            <img className="card-img" src="./images/profile.jpg" alt="profile" />    
        </div>
    )
}

export default Home