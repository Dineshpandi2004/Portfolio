import React from "react";
import "./Project.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio website using React.",
    tech: "React, CSS, HTML, JavaScript",
    github: "https://github.com/Dineshpandi2004/portfolio",
  },
  {
    title: "E-Commerce App",
    description: "Shopping app with payment integration.",
    tech: "React, Node.js",
    github: "https://github.com/Dineshpandi2004/portfolio",

  },
  {
    title: "Chat Application",
    description: "Realtime chat app with Firebase.",
    tech: "React, Javascript",
    github: "https://github.com/Dineshpandi2004/portfolio",

  },
];

const Project = () => {
  return (
    <div className="portfolio">
      <h1 className="portfolio-title">My Portfolio</h1>

      <div className="project-container">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;