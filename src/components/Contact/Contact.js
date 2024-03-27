import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

const Contact = ({ theme }) => {
  return (
    <section className="contact section" id="contact">
      <h2 className="title">contact</h2>
      <ul className="contact_list">
        <li
          className={
            theme === "light" ? "contact_list-item" : "contact_list-item_dark"
          }
        >
          <a
            href="https://www.linkedin.com/in/nemanja-toskic-543a34276/"
            className={theme === "light" ? "contact_link" : "contact_link_dark"}
          >
            <span typeof="button">
              <FaLinkedin />
            </span>
          </a>
        </li>
        <li
          className={
            theme === "light" ? "contact_list-item" : "contact_list-item_dark"
          }
        >
          <a
            href="https://github.com/toska27"
            className={theme === "light" ? "contact_link" : "contact_link_dark"}
          >
            <span typeof="button">
              <FaGithub />
            </span>
          </a>
        </li>
        <li
          className={
            theme === "light" ? "contact_list-item" : "contact_list-item_dark"
          }
        >
          <a
            href="https://www.instagram.com/toskic_n/"
            className={theme === "light" ? "contact_link" : "contact_link_dark"}
          >
            <span typeof="button">
              <FaInstagram />
            </span>
          </a>
        </li>
        <li
          className={
            theme === "light" ? "contact_list-item" : "contact_list-item_dark"
          }
        >
          <a
            href="mailto:nemanjatoskic58@gmail.com"
            className={theme === "light" ? "contact_link" : "contact_link_dark"}
          >
            <span typeof="button">
              <FaEnvelope />
            </span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
