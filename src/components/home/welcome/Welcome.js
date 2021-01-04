import React from 'react'
import WelcomeText from './elements/WelcomeText'
import './Welcome.scss'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Welcome() {

    const scroll = () => {
        window.scrollTo(0, 700)
    }

    return (
        <div className="welcome-section">
            <div className="content">
                <WelcomeText/>
                <div className="image-container">
                    <div className="circle">
                       <img src="./images/myPhoto.jpg" alt="my-photo"/>
                    </div>
                </div>
            </div>
            <div className="scroll-down" onClick={scroll}>
                <ArrowForwardIosIcon className="fist-row"/>
                <ArrowForwardIosIcon/>
            </div>
        </div>
    )
}

export default Welcome
