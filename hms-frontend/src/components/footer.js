import React from "react";
import "../components/footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="home_footer">
        <h5>{`Copyright © GALAXY RESORT ${year} Created by HIMANSU MALLIK`}</h5>
      </div>
    </>
  );
};

export default Footer;
