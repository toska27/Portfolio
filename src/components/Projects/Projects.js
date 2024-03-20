import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="projects_title">PROJECTS</h2>
      <div className="projects_grid">
        <div className="card">
          <h3 className="card_title">Project1</h3>
          <p className="card_desc">
            Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta
            facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum
            delectus modi quisquam?
          </p>
          <ul className="card_list">
            <li className="card_list-item">html</li>
            <li className="card_list-item">css</li>
            <li className="card_list-item">php</li>
          </ul>
          <a href="#" className="card_link">
            link to github
          </a>
        </div>
        <div className="card">
          <h3 className="card_title">Project2</h3>
          <p className="card_desc">
            Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta
            facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum
            delectus modi quisquam?
          </p>
          <ul className="card_list">
            <li className="card_list-item">html</li>
            <li className="card_list-item">css</li>
            <li className="card_list-item">php</li>
          </ul>
          <a href="#" className="card_link">
            link to github
          </a>
        </div>
        <div className="card">
          <h3 className="card_title">Project3</h3>
          <p className="card_desc">
            Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta
            facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum
            delectus modi quisquam?
          </p>
          <ul className="card_list">
            <li className="card_list-item">html</li>
            <li className="card_list-item">css</li>
            <li className="card_list-item">php</li>
          </ul>
          <a href="#" className="card_link">
            link to github
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
