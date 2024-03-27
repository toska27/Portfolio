import React from "react";
import "./Navbar.css";

const Navbar = ({ theme }) => {
  return (
    <nav>
      <ul className="nav_list">
        <li className="nav_list-item">
          <a
            href="#projects"
            className={theme === "light" ? "link" : "link_dark"}
          >
            projects
          </a>
        </li>
        <li className="nav_list-item">
          <a
            href="#skills"
            className={theme === "light" ? "link" : "link_dark"}
          >
            skills
          </a>
        </li>
        <li className="nav_list-item">
          <a
            href="#contact"
            className={theme === "light" ? "link" : "link_dark"}
          >
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
