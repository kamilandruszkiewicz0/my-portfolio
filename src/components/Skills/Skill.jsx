import React from "react";
import "./Skill.css";
import { FaAws, FaDocker, FaCode, FaPython, FaLinux, FaTools } from "react-icons/fa";

const Skill = () => {
  return (
    <section id="skills" className="skills-section">
            <h2>Skills</h2>
            <div className="skills-grid">
              <div className="skill-card">
                <FaAws className="skill-icon" />
                <h3>AWS</h3>
                <p>Cloud computing & infrastructure management.</p>
              </div>
              <div className="skill-card">
                <FaDocker className="skill-icon" />
                <h3>Docker</h3>
                <p>Containerization & microservices deployment.</p>
              </div>
              <div className="skill-card">
                <FaCode className="skill-icon" />
                <h3>CI/CD</h3>
                <p>Automated pipelines & DevOps workflows.</p>
              </div>
              <div className="skill-card">
                <FaPython className="skill-icon" />
                <h3>Python</h3>
                <p>Backend development & scripting.</p>
              </div>
              <div className="skill-card">
                <FaLinux className="skill-icon" />
                <h3>Linux</h3>
                <p>System administration & shell scripting.</p>
              </div>
              <div className="skill-card">
                <FaTools className="skill-icon" />
                <h3>Monitoring & Logging</h3>
                <p>Performance tracking & log management.</p>
              </div>
            </div>
          </section>
  );
};

export default Skill;
