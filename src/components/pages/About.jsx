import React from "react";
import Cards from "../Cards";
import Footer from "../Footer";
import Header from "../Header";
import Main from "../Main";
import "../../App.css";

const About = () => {
  return (
    <div>
      <Header />
      <Main check="about" mainText="About Page" />
      <Cards />
      <Footer />
    </div>
  );
};

export default About;
