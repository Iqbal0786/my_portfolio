import React from 'react'
import BottomAbout from '../BottomAbout'
import {FaGithub} from 'react-icons/fa'
import juicyheroimg from "../images/juicy hero image.png"
import bigbasekthero from "../images/bigbasket hero.jpeg"
import githubhero from "../images/Mini Github.png"
import weatherhero from "../images/weatherhero.png"

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
                {/* project one */}
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

                 {/* project two */}
                 <div className="projs">
                    <div className="img">
                        <img src={bigbasekthero} alt="movies" />
                    </div>
                    <div className="title">
                       BigBasket Clone
                    </div>
                    <div className="projinfo">
                    A web application to buy groceries online.<br/>
                    Tech Stack: HTML | CSS | Javascript | DOM | LocalStorage |MongoDb | Express | Mongoose | NPM |JWT | O Auth etc.
                    </div>
                     <div className='flex'>
                     <div className="projlinks">
                        <a href="https://bigbasket-clone-v2.vercel.app/" target={"_blank"}>Live</a>
                    </div>
                    <div className="projlinks">
                        <a href="https://github.com/Iqbal0786/Bigbasket_Clone_v2" target={"_blank"}>GitHub</a>
                    </div>
                     </div>
                </div>

                 {/* project three */}
                 <div className="projs">
                    <div className="img">
                        <img src={githubhero} alt="movies" />
                    </div>
                    <div className="title">
                     Mini Github 
                    </div>
                    <div className="projinfo">
                    A web application which is used to find the repos of the user<br/>
                    Tech Stack: HTML | CSS | Javascript | DOM | GitHub API
                    </div>
                     <div className='flex'>
                     <div className="projlinks">
                        <a href="https://my-mini-git-hub-v1.vercel.app/" target={"_blank"}>Live</a>
                    </div>
                    <div className="projlinks">
                        <a href="https://github.com/Iqbal0786/my_mini_gitHub_v1" target={"_blank"}>GitHub</a>
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
