import React from "react";
import { FaArrowUp } from "react-icons/fa";
import "./Footer.css";

const Footer = ({ theme }) => {
  return (
    <footer className={theme === "light" ? "footer" : "footer_dark"}>
      <a href="#header" className={theme === "light" ? "arrow" : "arrow_dark"}>
        <span typeof="button">
          <FaArrowUp />
        </span>
      </a>
      <h5>Created By Nemanja Toskic</h5>
    </footer>
  );
};

export default Footer;
