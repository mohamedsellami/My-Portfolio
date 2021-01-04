import React, { useEffect, useState } from 'react'
import Project from './Project'
import './TopProjects.scss'
import { useStateValue } from '../../../../Reducer/stateProvider'

function TopProjects() {

    const [ { projects } , dispatch ] = useStateValue();

    return (
        <div className="top-projects">
            {projects.topProjects.map((project, i)=>(
                <Project 
                    key={i}
                    id={project.id}
                    category={project.category}
                    title={project.title}
                    image={project.images[0]}
                    tools={project.tools[0]}
                    demo={project.demo}
                    code={project.code}
                    />
            ))}
        </div>
    )
}

export default TopProjects
