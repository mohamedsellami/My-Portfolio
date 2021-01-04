import React from 'react'
import './Projects.scss'
import TopProjects from './elements/TopProjects'
import FrontendMentorProjects from './elements/FrontendMentorProjects'
import FreeCodeCampProjects from './elements/FreeCodeCampProjects'

function Projects() {
    return (
        <div className="projects">
            <h2>My Projects</h2>
            <TopProjects/>
            <FrontendMentorProjects/>
            <FreeCodeCampProjects/>
        </div>
    )
}

export default Projects
