import React from "react";
import Project from "../components/Project";
import Skill from "../components/Skills";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Experience />
      <Contact />
    </div>
  );
};

export default HomePage;
