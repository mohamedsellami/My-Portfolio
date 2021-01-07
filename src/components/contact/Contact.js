import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import { Link } from "react-router-dom"
import "./Contact.scss"

function Contact() {

    document.title = "Mohamed Sellami | Contact";

    return (
        <div className="contact-section">
            <Link to="/">
                <HomeIcon className="homeIcon"/>
            </Link>
            <div className="contact-container">
                <h2>Contact me</h2>
                <form id="contact-form" name="contact" method="POST" data-netlify="true">
                    <input name="email" className="form-control email" type="email" placeholder="Your email" required/>
                    <br/>
                    <textarea name="message" className="form-control" placeholder="Message" col="10" required/>
                    <br/>
                    <input type="submit" name="submit" value="send" className="submit"/>
                </form>
                <h5>You can also work with me here</h5>
                <div className="social-media">
                    <a href="https://www.fiverr.com/mohamed_sellami?up_rollout=true" target="_blank">
                    <div className="container fiverr">
                        <div className="logo"><img src="./images/fiverr.png" alt=""/></div>
                        <span>Fiverr</span>
                    </div>
                </a>
                <a href="https://mostaql.com/u/MohamedSellami" target="_blank">
                    <div className="container mostaqel">
                        <div className="logo"><img src="./images/mostaqel.png" alt="" /></div>
                        <span>Mostaqel</span>
                    </div>
                </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
