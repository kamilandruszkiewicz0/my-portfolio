import React from "react";
import "./Header.css"; 

function Header() {
  return (
  <header className="header">
    <div className="header-left">Portfolio</div>
    <nav className="header-right">
        <a href="#about" className="nav-button">About</a>
        <a href="#skills" className="nav-button">Skills</a>
        <a href="#contact" className="nav-button">Contact</a>
    </nav>
  </header>
  )
}

export default Header;
