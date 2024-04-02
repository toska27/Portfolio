import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = ({ onChange }) => {
  const [theme, setTheme] = useState("light");

  const handleChange = () => {
    const newValue = theme === "light" ? "dark" : "light";
    setTheme(newValue);
    onChange(newValue);
  };

  return (
    <header
      className={theme === "light" ? "header_light" : "header_dark"}
      id="header"
    >
      <h3 className="header_title">portfolio</h3>
      <Navbar theme={theme} />
      <button
        onClick={handleChange}
        className={theme === "light" ? "themeBtn_light" : "themeBtn_dark"}
      >
        {`${theme === "light" ? "dark" : "light"} theme`}
      </button>
    </header>
  );
};

export default Header;
