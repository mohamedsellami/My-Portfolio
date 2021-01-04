import React from 'react'
import './Details.scss'
import { Link } from "react-router-dom"
import DetailsContent from './elements/DetailsContent'
import HomeIcon from '@material-ui/icons/Home';

function Details() {

    document.title = "Mohamed Sellami | Project details";

    return (
        <div className="details-page">
            <div className="header">
                <Link to="/">
                    <div className="logo">
                        <HomeIcon/>
                    </div>
                </Link>
                <Link to="/contact">
                    <button className="contact-btn">Contact</button>
                </Link>
            </div>
            <DetailsContent/>
        </div>
    )
}

export default Details
