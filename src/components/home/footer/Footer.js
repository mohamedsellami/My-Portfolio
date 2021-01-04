import React from 'react'
import './Footer.scss'
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer-section">
            <h3>So what are you waiting for! let's get to work</h3>
            <Link to="./contact">
                <button className="contact-footer">Contact</button>
            </Link>
            <h4>You can also find me here</h4>
            <div className="social-media">
                <a href="https://twitter.com/MedSellamiDev" target="_blank">
                    <div className="container twitter">
                        <div className="logo"><TwitterIcon/></div>
                        <span>Twitter</span>
                    </div>
                </a>
                <a href="https://www.instagram.com/moh_amed_sellami/?hl=en" target="_blank">
                    <div className="container instagram">
                        <div className="logo"><InstagramIcon/></div>
                        <span>Instagram</span>
                    </div>
                </a>
                <a href="https://github.com/mohamedsellami" target="_blank">
                    <div className="container github">
                        <div className="logo"><GitHubIcon/></div>
                        <span>Github</span>
                    </div>
                </a>
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
            <footer>
                <span>Made with <FavoriteIcon/> by Mohamed Sellami</span>
            </footer>
        </div>
    )
}

export default Footer
