import React from "react";

import '../../App.css'
import './home.css'

function Home() {
    return(
        <div className="card">
            <div className="card-text">Alexis Patiño</div>
            <div className="card-text">FullStack Developer</div>
            <img className="card-img" src="./profile.jpg" alt="profile" />
        </div>
    )
}

export default Home