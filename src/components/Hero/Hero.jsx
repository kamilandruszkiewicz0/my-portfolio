import { useEffect, useRef } from "react";
import "./Hero.css";
import ProfileImage from "./ProfileImage.jpg";

const Hero = () => {
  const nameRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    function typeEffect(element, text, speed, callback) {
      let i = 0;
      element.textContent = "";

      function typing() {
        if (i < text.length) {
          element.textContent = text.substring(0, i + 1);
          i++;
          setTimeout(typing, speed);
        } else if (callback) {
          setTimeout(callback, 500);
        }
      }
      typing();
    }

    if (nameRef.current && titleRef.current) {
      typeEffect(nameRef.current, "Kamil Andruszkiewicz", 100, () => {
        typeEffect(titleRef.current, "I'm a DevOps Engineer.", 100);
      });
    }
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h4>Hello It's Me!</h4>
          <h2 id="typing-name" ref={nameRef}></h2>
          <p id="typing-title" ref={titleRef}></p>
        </div>
      </div>
      <div className="hero-image">
        <img src={ProfileImage} alt="Profile" />
      </div>
    </section>
  );
};

export default Hero;
