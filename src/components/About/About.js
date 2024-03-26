import React from "react";
import { FaGithub } from "react-icons/fa";
import { about } from "../../portfolio";
import "./About.css";

const About = () => {
  const { name, role, desc } = about;
  return (
    <section className="about">
      <h1 className="about_name">
        Hi, I am <span className="name">{name}</span>
      </h1>
      <h3 className="about_role">{role}</h3>
      <p className="about_desc">{desc}</p>
    </section>
  );
};

export default About;
