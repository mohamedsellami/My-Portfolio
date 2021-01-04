import React from 'react'
import SkillsDetails from './elements/SkillsDetails'
import './Skills.scss'

function Skills() {
    return (
        <div className="skills">
            <div className="my-skills">
                <div className="technologie">
                    <div className="string"></div>
                    <img src="./images/sass.png" alt="sass logo"/>
                </div>
                <div className="technologie main-skill">
                    <div className="string"></div>
                    <img src="./images/html.png" alt="html logo"/>
                </div>
                <div className="technologie">
                    <div className="string"></div>
                    <img src="./images/bootstrap.png" alt="bootstrap logo"/>
                </div>
                <div className="technologie main-skill">
                    <div className="string"></div>
                    <img src="./images/css.png" alt="css logo"/>
                </div>
                <div className="technologie">
                    <div className="string"></div>
                    <img src="./images/react.svg" className="react" alt="react logo"/>
                </div>
                <div className="technologie main-skill">
                    <div className="string"></div>
                    <img src="./images/javascript.svg" alt="javascript logo"/>
                </div>
                <div className="technologie">
                    <div className="string"></div>
                    <img src="./images/jquery.svg" alt="jquery logo"/>
                </div>
            </div>
            <SkillsDetails/>
        </div>
    )
}

export default Skills
