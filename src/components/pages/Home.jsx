import React from "react";
import Cards from "../Cards";
import Footer from "../Footer";
import Header from "../Header";
import Main from "../Main";

const Home = () => {
  return (
    <div>
      <Header />
      <Main mainText="this is home page" />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
