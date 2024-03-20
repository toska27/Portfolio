import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="contact_title">CONTACT</h2>
      <ul className="contact_list">
        <li className="contact_list-item">
          <a href="#">linkedin</a>
        </li>
        <li className="contact_list-item">
          <a href="#">github</a>
        </li>
        <li className="contact_list-item">
          <a href="#">insta</a>
        </li>
        <li className="contact_list-item">
          <a href="#">email</a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
