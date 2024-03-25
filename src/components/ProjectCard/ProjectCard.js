import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="card">
      <h3 className="card_title">{project.title}</h3>
      <p className="card_desc">{project.desc}</p>
      <ul className="card_list">
        {project.stack.map((item) => (
          <li key={item.id} className="card_list-item">
            {item.name}
          </li>
        ))}
      </ul>
      <a href={project.link} className="card_link">
        link to github
      </a>
    </div>
  );
};

export default ProjectCard;
