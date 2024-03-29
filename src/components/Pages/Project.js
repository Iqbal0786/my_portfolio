import React from 'react'
import BottomAbout from '../BottomAbout'
import {FaGithub} from 'react-icons/fa'
import juicyheroimg from "../images/juicy hero image.png"
import bigbasekthero from "../images/bigbasket hero.jpeg"
import githubhero from "../images/Mini Github.png"
import weatherhero from "../images/weatherhero.png"
import grubhero from "../images/GrubHub Hero.png"

function Project() {
    return (
        <div className="Project" id='projectDiv'>
            <div className="head">
                My Projects
                <div className="projectsIntro">
                    <div>Here are some of the projects that I have done</div>
                </div>
            </div>
            <div className="container">
            <div className="projs">
                    <div className="img">
                        <img src={grubhero} alt="movies" />
                    </div>
                    <div className="title">
                    Grubhub Clone
                    </div>
                    <div className="projinfo">
                    A web application for ordering food online<br/>
                    Tech Stack: HTML | CSS | JavaScript | React | Material Ui |
localStorage | Nodejs | Expressjs | Mongodb| GoogleAuth |
Mongoose | JWT | Redux
                    </div>
                     <div className='flex'>
                     <div className="projlinks">
                        <a href="https://grubhub-clone-project.vercel.app/" target={"_blank"}>Live</a>
                    </div>
                    <div className="projlinks">
                        <a href="https://github.com/kajalG-97/GRUBHUB-CLONE-PROJECT" target={"_blank"}>GitHub</a>
                    </div>
                     </div>
                </div>

                {/* project one */}
              
                 {/* project two */}
                 <div className="projs">
                    <div className="img">
                        <img src="https://user-images.githubusercontent.com/63330022/187656177-06786825-4558-4504-b8e4-c9631d7b1531.png" alt="movies" />
                    </div>
                    <div className="title">
                       TeeRex Store 
                    </div>
                    <div className="projinfo">
                    An online coding challenge on Geektrus.com<br/>
                    <i>Achievement :</i> Got 94 marks with several badges.<br/>
                    Tech Stack: HTML | CSS | Javascript |React| Redux |Redux-thunk | API | 
                    </div>
                     <div className='flex'>
                     <div className="projlinks">
                        <a href="https://teerex-store-rho.vercel.app/" target={"_blank"}>Live</a>
                    </div>
                    <div className="projlinks">
                        <a href="https://github.com/Iqbal0786/teerex-store" target={"_blank"}>GitHub</a>
                    </div>
                     </div>
                </div>

                 {/* project three */}
                 <div className="projs">
                    <div className="img">
                        <img src={juicyheroimg} alt="movies" />
                    </div>
                    <div className="title">
                       Juicy Chemistry Clone
                    </div>
                    <div className="projinfo">
                    A web application for skin remedial products.<br/>
                    Tech Stack: HTML | CSS | Javascript | DOM | LocalStorage
                    </div>
                     <div className='flex'>
                     <div className="projlinks">
                        <a href="https://juicy-chemistry-clone1.vercel.app/" target={"_blank"}>Live</a>
                    </div>
                    <div className="projlinks">
                        <a href="https://github.com/Iqbal0786/Juicy_Chemistry_Clone1" target={"_blank"}>GitHub</a>
                    </div>
                     </div>
                </div>
                 {/* project four */}
                 <div className="projs">
                    <div className="img">
                        <img src={weatherhero} alt="movies" />
                    </div>
                    <div className="title">
                       Mini Weather App
                    </div>
                    <div className="projinfo">
                    A web application for getting Current weather and map.<br/>
                    Tech Stack: HTML | CSS | Javascript | DOM | Weather API
                    </div>
                     <div className='flex'>
                     <div className="projlinks">
                        <a href="https://myweather-one.vercel.app/" target={"_blank"}>Live</a>
                    </div>
                    <div className="projlinks">
                        <a href="https://github.com/Iqbal0786/Weather_mini_app" target={"_blank"}>GitHub</a>
                    </div>
                     </div>
                </div>
                </div>
            <div className="moreprojs">
                <div>For more You can view my github</div>
                <div><a href="https://github.com/Iqbal0786/" target={"_blank"}><FaGithub /> Github</a></div>
            </div>
            <BottomAbout/>
        </div>
    )
}

export default Project
