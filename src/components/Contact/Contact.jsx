import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_cz7a8ry", "template_n93aujq", form.current, "f8V3AW5n3JN1aY-e8")
      .then(
        (result) => {
          console.log("Message sent!");
        },
        (error) => {
          console.log("Error sending message.");
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact With Me</h2>
          <p>
            I'm open to new projects and collaborations. <br />
            Feel free to reach out to me about anything <br />
            related to DevOps, cloud solutions, or automation.
          </p>
          <hr className="contact-separator" />
          <p>
            <strong>Phone:</strong> +48 534 157 764
          </p>
          <p>
            <strong>Email:</strong> kamil.andruszkiewicz0@gmail.com
          </p>
          <p>
            <strong>Location:</strong> Olsztyn, Country
          </p>
        </div>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <p>YOUR NAME</p>
          <input type="text" name="name" placeholder="" required />
          <p>YOUR EMAIL</p>
          <input type="email" name="email" placeholder="" required />
          <p>YOUR MESSAGE</p>
          <textarea className="textarea" name="message" rows="5" placeholder="" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
