import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header" id="header">
      <h3 className="header_title">portfolio</h3>
      <nav>
        <ul className="nav_list">
          <li className="nav_list-item">
            <a href="#" className="link">
              projects
            </a>
          </li>
          <li className="nav_list-item">
            <a href="#" className="link">
              skills
            </a>
          </li>
          <li className="nav_list-item">
            <a href="#" className="link">
              contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
