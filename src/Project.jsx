import React from "react";
import "./Project.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built using React.",
    tech: "React, CSS, JavaScript",
    github: "https://github.com/Dineshpandi2004/portfolio",
  },
  {
    title: "E-Commerce App",
    description: "Shopping app with cart and payment system.",
    tech: "React, Node.js",
    github: "https://github.com/Dineshpandi2004/portfolio",
  },
  {
    title: "Chat Application",
    description: "Realtime chat app using Firebase.",
    tech: "React, Firebase",
    github: "https://github.com/Dineshpandi2004/portfolio",
  },
];

function Project() {
  return (
    <section className="project">
      <h1 className="project-title">My Projects</h1>

      <div className="project-container">
        {projects.map((item, index) => (
          <div className="project-card" key={index}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p className="tech">{item.tech}</p>

            <div className="buttons">
              <a href={item.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="#" className="demo-btn">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;