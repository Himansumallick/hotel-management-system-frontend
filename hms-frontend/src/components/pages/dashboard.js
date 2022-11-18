import React from "react";
import Dashboardbody from "../pages/Dashboardbody.js";
import Navbar from "../Navbar.js";
import Footer from "../footer";
import { useOutletContext } from "react-router-dom";

const Dashboard = () => {
  const [globalData, setGlobalData] = useOutletContext();
  return (
    <div>
      <Navbar />
      <Dashboardbody globalData={globalData} setGlobalData={setGlobalData} />
      <Footer />
    </div>
  );
};

export default Dashboard;
