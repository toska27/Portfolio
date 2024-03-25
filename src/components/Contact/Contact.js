import React from "react";
import { contact } from "../../portfolio";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="title">contact</h2>
      <ul className="contact_list">
        {contact.map((item) => (
          <li key={item.id} className="contact_list-item">
            <a href={item.link}>
              <span typeof="button">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Contact;
