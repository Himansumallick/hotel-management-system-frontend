import React from "react";
import "../../App.css";
import Herosection from "../Herosection";
import Navbar from "../Navbar";
import Footer from "../footer";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Herosection />
        <Footer />
      </div>
    </>
  );
};

export default Home;
