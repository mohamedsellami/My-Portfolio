import React from 'react'
import './Project.scss'
import { Link } from "react-router-dom";
import { useStateValue } from '../../../../Reducer/stateProvider'

function Project({ id, title, image, tools, demo, code, category }) {

    const [ { projects }, dispatch ] = useStateValue();

    const ShowDetails = () => {
        dispatch({
            type: 'SHOW_DETAILS',
            project: [...projects[category]].filter((project)=> project.id === id)[0]
        })
        localStorage.setItem("currentProject", JSON.stringify([...projects[category]].filter((project)=> project.id === id)[0]));
    }

    return (
        <div className={`project ${category}`}>
            <h5>{title}</h5> 
            <a href={demo} target="_blank"><img className="project-image" src={image} alt={title} /></a>
            <div className="tools">
                {tools.map((tool, i)=>(
                    <img className="tool" src={tool} alt="" key={i}/>
                ))}
            </div>
            <div className="buttons">
                <a href={demo} target="_blank"><button className="demo">Demo</button></a>
                <a href={code} target="_blank"><button className="code">code</button></a>
                <Link to="/details">
                    <button className="details-btn" onClick={ShowDetails}>Details</button>
                </Link>
            </div>
        </div>
    )
}

export default Project
