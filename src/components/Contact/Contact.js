import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="title">contact</h2>
      <ul className="contact_list">
        <li className="contact_list-item">
          <a href="https://www.linkedin.com/in/nemanja-toskic-543a34276/">
            <span typeof="button">
              <FaLinkedin />
            </span>
          </a>
        </li>
        <li className="contact_list-item">
          <a href="https://github.com/toska27">
            <span typeof="button">
              <FaGithub />
            </span>
          </a>
        </li>
        <li className="contact_list-item">
          <a href="https://www.instagram.com/toskic_n/">
            <span typeof="button">
              <FaInstagram />
            </span>
          </a>
        </li>
        <li className="contact_list-item">
          <a href="mailto:nemanjatoskic58@gmail.com">
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
