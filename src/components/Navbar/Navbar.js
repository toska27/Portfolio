import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <button
        className={theme === "light" ? "hamburger_menu" : "hamburger_menu_dark"}
        onClick={toggleMenu}
      >
        <FaBars />
      </button>
      <ul
        className={`nav_list ${theme === "light" ? "" : "nav_list_dark"} ${
          isMenuOpen ? "show_menu" : ""
        }`}
      >
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
