import React from 'react'
import Footer from './footer/Footer'
import Projects from './projects/Projects'
import Skills from './Skills-section/Skills'
import Welcome from './welcome/Welcome'


function Home() {
    
    document.title = "Mohamed Sellami | Frontend Developer";

    return (
        <div className="home">
            <Welcome/>
            <Skills/>
            <Projects/>
            <Footer/>
        </div>
    )
}

export default Home
