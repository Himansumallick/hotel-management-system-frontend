import React from "react";
import Dashboardbody from "../pages/Dashboardbody.js";
import Navbar from "../Navbar.js";
import Footer from "../footer";

const dashboard = () => {
  return (
    <div>
      <Navbar />
      <Dashboardbody />
      <Footer />
    </div>
  );
};

export default dashboard;
