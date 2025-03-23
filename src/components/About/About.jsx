import React from "react";
import "./About.css";
import CV from "./CV.pdf"
import myPhoto from "./myPhoto.png"

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        <div className="about-image">
            <img src={myPhoto} alt="My Profile" />
        </div>

        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am passionate about cloud technologies and Linux systems.
            I focus on learning and improving my skills in Infrastructure as Code (IaC), 
            automation, and containerization using Docker.
            I am interested in DevOps and cloud infrastructure management.
            I want to develop in this field and gain experience in optimizing and automating IT processes.
            Currently, I am intensively learning DevOps tools, exploring their practical applications.
          </p>
          <a href={CV} className="download-cv" download>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
