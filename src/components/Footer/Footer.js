import React from "react";
import { FaArrowUp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="#header">
        <span typeof="button">
          <FaArrowUp />
        </span>
      </a>
      <h5>Created By Nemanja Toskic</h5>
    </footer>
  );
};

export default Footer;
