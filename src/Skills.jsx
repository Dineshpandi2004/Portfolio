import React from "react";
import "./Skills.css";

function Skills() {
  const skillsData = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React", level: "75%" },
  ];

  return (
    <div className="skills-container">
      <h1>My Skills</h1>

      {skillsData.map((skill, index) => (
        <div className="skill" key={index}>
          <p>{skill.name}</p>

          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: skill.level }}
            >
              {skill.level}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;