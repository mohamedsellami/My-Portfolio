import React from 'react'
import './DetailsContent.scss'
import { useStateValue } from '../../../Reducer/stateProvider'

function DetailsContent() {

    const [ { currentProject }, dispatch ] = useStateValue();

    return (
        <div className="detailsContent">
            <div className="left">
                <h2>{currentProject.title}</h2>
                <a href={currentProject.demo} target="_blank"><img className="project-image" src={currentProject.images[0]} alt=""/></a>
                <div className="buttons">
                    <a href={currentProject.demo} target="_blank"><button>Demo</button></a>
                    <a href={currentProject.code} target="_blank"><button>Code</button></a>
                </div>
            </div>
            <div className="right">
                <div className="tools-conetnt">
                    <h3>Tools</h3>
                    <p>
                    {currentProject.tools[1].map((obj)=> <span>{obj.details}<br/></span>)}</p>
                </div>
                <div className="features">
                    <h3>Features</h3>
                    <ul>
                        {currentProject.features.map((feature)=> <li>{feature}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DetailsContent
