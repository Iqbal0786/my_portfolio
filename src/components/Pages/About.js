import React from 'react';
import profile from "../images/ProfileImg.jpeg"

function About() {
  return (
    <div>
      <div className="aboutmeintro" id='aboutDiv'>A short introduction about me</div>
      <div className="About">
        <div className="abouttext">
          <div className="headtext">
            I'm Mohammad Iqbal,
            <div>A Full Stack MERN Developer</div>
          </div>
          <div className="details">
            I am currently learning Full Stack Web development at Masai School. I'm passionate about
            programming and everything technology and have endeavored to be upto
            date with the current technologies and skills.
          </div>
          <div className="more">
          I have expertise in HTML, CSS, and JavaScript. Additionally, I have experience 
          and considerable knowledge about ES6, Express, Node, NPM, MongoDB, Mongoose, and Git.
          </div>
        </div>
        <div className="imageme" >
          <img  src={profile} alt="Allan" height="300" />
        </div>
      </div>
    </div>
  );
}

export default About;
