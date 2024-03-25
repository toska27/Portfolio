import React from "react";
import { skills } from "../../portfolio";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="title">skills</h2>
      <ul className="skills_list">
        {skills.map((skill) => (
          <li key={skill.id} className="skills_list-item">
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
