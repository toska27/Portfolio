import React from "react";
import { projects } from "../../portfolio";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.css";

const Projects = ({ theme }) => {
  return (
    <section className="projects section" id="projects">
      <h2 className="title">projects</h2>
      <div className="projects_grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} theme={theme} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
