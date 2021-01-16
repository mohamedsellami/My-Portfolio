import React, { useEffect } from 'react'
import './SkillsDetails.scss'

function Details() {

    const X = window.matchMedia("(max-width: 720px)")

    const listenToScroll = () => {
        if(window.pageYOffset >= 651 && !X.matches){
            document.querySelector(".who-I-am .content").style.transform = "translateX(-150px)";
            document.querySelector(".who-I-am .image").style.transform = "translateX(150px)";
            document.querySelector(".who-I-am .content").addEventListener("transitionend", ()=> {
                document.querySelector(".who-I-am .content p").style.display = "block";
                document.querySelector(".who-I-am .content p").style.opacity = "1";
               })
        }
        if(window.pageYOffset >= 1002 && !X.matches){
            document.querySelector(".what-I-can-offer .content").style.transform = "translateX(150px)";
            document.querySelector(".what-I-can-offer .image").style.transform = "translateX(-150px)";
            document.querySelector(".what-I-can-offer .content").addEventListener("transitionend", ()=> {
                document.querySelector(".what-I-can-offer .content p").style.display = "block";
                document.querySelector(".what-I-can-offer .content p").style.opacity = "1";
               })
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);  
    }, [])
    return (
        <div className="details">
            <div className="container who-I-am">
                <div className="content">
                    <h2>Who am i?</h2>
                    <p>I'm a Frontend Web Developer, I can work with HTML, CSS, Sass JavaScript, React, Bootstrap, jQuery and I can work with API.<br/>I love working with React and I build most of my projects using it.</p>
                </div>
                <div className="image">
                    <img src="./images/programmer.png" alt="programmer vector"/>
                </div>
            </div>
            <div className="container what-I-can-offer">
                <div className="content">
                    <h2>What can I offer?</h2>
                    <p>I'll build the frontend of your website, and I'll make sure your website is responsive, modern and fast.<br/>I can add animation and make your website interact with the user</p>
                </div>
                <div className="image">
                    <img src="./images/website.png" alt="programmer vector"/>
                </div>
            </div>
        </div>
    )
}

export default Details
