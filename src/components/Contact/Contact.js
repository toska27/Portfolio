import React from "react";
import { contact } from "../../portfolio";
import "./Contact.css";

const Contact = ({ theme }) => {
  return (
    <section className="contact section" id="contact">
      <h2 className="title">contact</h2>
      <ul className="contact_list">
        {contact.map((item) => {
          const { id, link, icon } = item;
          return (
            <li
              key={id}
              className={
                theme === "light"
                  ? "contact_list-item"
                  : "contact_list-item_dark"
              }
            >
              <a
                href={link}
                className={
                  theme === "light" ? "contact_link" : "contact_link_dark"
                }
              >
                <span typeof="button">{icon}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Contact;
