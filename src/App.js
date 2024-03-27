import React, { useState } from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  const [appTheme, setAppTheme] = useState("light");

  const handleAppThemeChange = (newState) => {
    setAppTheme(newState);
  };

  return (
    <div className={`${appTheme}`}>
      <Header onChange={handleAppThemeChange} />
      <About />
      <Projects theme={appTheme} />
      <Skills theme={appTheme} />
      <Contact theme={appTheme} />
      <Footer theme={appTheme} />
    </div>
  );
};

export default App;
