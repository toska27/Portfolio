import React from "react";
import { about } from "../../portfolio";
import "./About.css";

const About = ({ theme }) => {
  const { name, role, desc } = about;
  return (
    <section className="about">
      <h1 className="about_name">
        Hi, I am
        <span className={theme === "light" ? "name" : "name_dark"}>
          {" "}
          {name}
        </span>
      </h1>
      <h3 className="about_role">{role}</h3>
      <p className="about_desc">{desc}</p>
    </section>
  );
};

export default About;
