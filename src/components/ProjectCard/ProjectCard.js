import React from "react";
import { FaGithub } from "react-icons/fa";
import "./ProjectCard.css";

const ProjectCard = ({ project, theme }) => {
  return (
    <div className={theme === "light" ? "card" : "card_dark"}>
      <h3 className="card_title">{project.title}</h3>
      <p className="card_desc">{project.desc}</p>
      <ul className="card_list">
        {project.stack.map((item) => (
          <li key={item.id} className="card_list-item">
            {item.name}
          </li>
        ))}
      </ul>
      <a
        href={project.link}
        className={theme === "light" ? "card_link" : "card_link_dark"}
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default ProjectCard;
