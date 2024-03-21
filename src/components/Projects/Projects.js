import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="title">projects</h2>
      <div className="projects_grid">
        <div className="card">
          <h3 className="card_title">Quotations</h3>
          <p className="card_desc">
            An application to display radnomly selected quotes from various
            fields.
          </p>
          <ul className="card_list">
            <li className="card_list-item">HTML</li>
            <li className="card_list-item">CSS(Bootstrap)</li>
            <li className="card_list-item">PHP</li>
            <li className="card_list-item">txt File</li>
          </ul>
          <a
            href="https://github.com/toska27/Projects/tree/main/Quotations"
            className="card_link"
          >
            link to github
          </a>
        </div>
        <div className="card">
          <h3 className="card_title">Social network</h3>
          <p className="card_desc">
            An application that works on the principle of user profiles and
            tracking other profiles.
          </p>
          <ul className="card_list">
            <li className="card_list-item">HTML</li>
            <li className="card_list-item">CSS(Bootstrap)</li>
            <li className="card_list-item">PHP</li>
            <li className="card_list-item">MySQL</li>
          </ul>
          <a
            href="https://github.com/toska27/Projects/tree/main/Social%20network"
            className="card_link"
          >
            link to github
          </a>
        </div>
        <div className="card">
          <h3 className="card_title">eVideo library</h3>
          <p className="card_desc">
            Application intended for keeping records of movie rentals.
          </p>
          <ul className="card_list">
            <li className="card_list-item">HTML</li>
            <li className="card_list-item">CSS(Bootstrap)</li>
            <li className="card_list-item">PHP</li>
            <li className="card_list-item">Laravel</li>
          </ul>
          <a
            href="https://github.com/toska27/Projects/tree/main/eVideo%20library"
            className="card_link"
          >
            link to github
          </a>
        </div>
        <div className="card">
          <h3 className="card_title">Coffee machine</h3>
          <p className="card_desc">
            An application that works on the principle of a coffee machine.
          </p>
          <ul className="card_list">
            <li className="card_list-item">HTML</li>
            <li className="card_list-item">CSS</li>
            <li className="card_list-item">JavaScript</li>
          </ul>
          <a
            href="https://github.com/toska27/Projects/tree/main/Coffee%20machine/Machine"
            className="card_link"
          >
            link to github
          </a>
        </div>
        <div className="card">
          <h3 className="card_title">E-commerce product page</h3>
          <p className="card_desc">
            An application that represents one side of an E-commerce site.
          </p>
          <ul className="card_list">
            <li className="card_list-item">HTML</li>
            <li className="card_list-item">Sass</li>
            <li className="card_list-item">JavaScript</li>
          </ul>
          <a
            href="https://github.com/toska27/Projects/tree/main/E-commerce%20product%20page"
            className="card_link"
          >
            link to github
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
