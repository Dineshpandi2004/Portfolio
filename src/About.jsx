import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about">

      <div className="about-image">
        <img
          
        />
      </div>

      <div className="about-content">

        <h3>About Me</h3>

        <h1>
          Frontend <span>Developer</span>
        </h1>

        <p>
          Hello! I'm Dinesh Pandi, a passionate Frontend Developer
          who loves building responsive and user-friendly websites.
          I specialize in HTML, CSS, JavaScript, React JS, and modern
          web technologies.
        </p>

        <p>
          I enjoy creating beautiful UI designs, smooth animations,
          and interactive web applications that provide a great user
          experience across all devices.
        </p>

        <div className="skills">

          <div className="skill-box">
            <h2>HTML</h2>
          </div>

          <div className="skill-box">
            <h2>CSS</h2>
          </div>

          <div className="skill-box">
            <h2>JavaScript</h2>
          </div>

          <div className="skill-box">
            <h2>React</h2>
          </div>

        

        </div>

        <a href="/" className="about-btn">
          Read More
        </a>

      </div>

    </section>
  );
}

export default About;