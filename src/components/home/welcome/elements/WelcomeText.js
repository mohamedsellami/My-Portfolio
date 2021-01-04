import React from 'react'
import './WelcomeText.scss'
import { Link } from "react-router-dom";

function WelcomeText() {
    return (
        <div className="welcome-text">
            <h1>Mohamed Sellami</h1>
            <h2>Frontend Developer</h2>
            <p>Let's build <span>modern</span> websites</p>
            <Link to="/contact"><button>Start Now</button></Link> 
        </div>
    )
}

export default WelcomeText
