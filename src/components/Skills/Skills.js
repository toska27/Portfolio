import React from "react";
import { skills } from "../../portfolio";
import "./Skills.css";

const Skills = ({ theme }) => {
  return (
    <section className="skills section" id="skills">
      <h2 className="title">skills</h2>
      <ul className="skills_list">
        {skills.map((skill) => (
          <li
            key={skill.id}
            className={
              theme === "light" ? "skills_list-item" : "skills_list-item_dark"
            }
          >
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
