import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skill from "./components/Skills/Skill";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./style.css";

function App() {
  
  return (
    <div className="main-container">
      <Header/>
      <Hero/>
      <About/>
      <Skill/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
