import React from 'react'
import './FrontendMentorProjects.scss'
import { useStateValue } from '../../../../Reducer/stateProvider'
import Project from './Project';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function FrontendMentorProjects() {

    const [ { projects } , dispatch ] = useStateValue();

    let transform = 0;
    const X = window.matchMedia("(max-width: 1260px)");
    const L = window.matchMedia("(max-width: 820px)");
    const M = window.matchMedia("(max-width: 500px)");
    // if(M.matches){
    //     document.querySelector(".frontendMentorProjects-container .leftAndRightbuttons-mobile .left").disabled = true;
    // }


    const left = () => {
        document.querySelector(".frontendMentorProjects-container .leftAndRightbuttons .right").style.display = "block";
        if(M.matches){
            transform -= 210;
        }else{
            transform -= 215;
        }
        
        if(transform => 0){
            document.querySelectorAll(".frontendMentorProjects").forEach((project)=>{
                project.style.transform = `translateX(-${transform}px)`
            }
        )
        }
        if(transform === 0){
            document.querySelector(".frontendMentorProjects-container .leftAndRightbuttons .left").style.display = "none";
        }
        if(transform === 0 && M.matches){
            document.querySelector(".frontendMentorProjects-container .leftAndRightbuttons-mobile .left").disabled = true;
            document.querySelector(".frontendMentorProjects-container .leftAndRightbuttons-mobile .left").style.pointerEvents = "none";
        }

        if(M.matches){
            document.querySelector(".frontendMentorProjects-container .leftAndRightbuttons-mobile .right").disabled = false;
            document.querySelector(".frontendMentorProjects-container .leftAndRightbuttons-mobile .right").style.pointerEvents = "auto";
        }
        
    }

    const right = (e) => {
        document.querySelector(".frontendMentorProjects-container .leftAndRightbuttons .left").style.display = "block";
        if(M.matches){
            transform += 210;
        }else{
            transform += 215;
        }

        document.querySelectorAll(".frontendMentorProjects").forEach((project)=>{
            project.style.transform = `translateX(-${transform}px)`
        })
       
        if(transform === 1935 && !X.matches){
            document.querySelector(".frontendMentorProjects-container .leftAndRightbuttons .right").style.display = "none";
        }else if(transform === 2365 && X.matches && !L.matches && !M.matches){
            document.querySelector(".frontendMentorProjects-container .leftAndRightbuttons .right").style.display = "none";
        }else if(transform === 2580 && L.matches && !M.matches){
            document.querySelector(".frontendMentorProjects-container .leftAndRightbuttons .right").style.display = "none";
        }else if(transform === 2730 && M.matches){
            document.querySelector(".frontendMentorProjects-container .leftAndRightbuttons-mobile .right").disabled = true;
            document.querySelector(".frontendMentorProjects-container .leftAndRightbuttons-mobile .right").style.pointerEvents = "none";
        }
        if(M.matches){
            document.querySelector(".frontendMentorProjects-container .leftAndRightbuttons-mobile .left").disabled = false;
            document.querySelector(".frontendMentorProjects-container .leftAndRightbuttons-mobile .left").style.pointerEvents = "auto";
        }
    }

    return (
        <div className="frontendMentorProjects-container">
            <h3> My Projects on Frontend Mentor</h3>
            <div className="frontendMentor-projects">
                {projects.frontendMentorProjects.map((project, i)=>(
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
            <div className="leftAndRightbuttons">
                <button className="left" onClick={left}><ArrowBackIcon/></button>
                <button className="right" onClick={right}><ArrowForwardIcon/></button>
            </div>
            <div className="leftAndRightbuttons-mobile">
                <button className="left" onClick={left}><ArrowBackIcon/></button>
                <button className="right" onClick={right}><ArrowForwardIcon/></button>
            </div>
        </div>
    )
}

export default FrontendMentorProjects
