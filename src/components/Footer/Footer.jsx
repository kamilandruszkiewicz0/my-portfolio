import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer-text">© 2024 Kamil Andruszkiewicz</p>
            <div className="footer-icons">
                <a href="https://github.com/kamilandruszkiewicz0" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/kamil-andruszkiewicz-0336a3315/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
