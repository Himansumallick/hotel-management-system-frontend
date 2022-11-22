import React from "react";
import "../components/footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Footer */}
      <footer class="container-fluid bg-4 text-center">
        <h4>{`Copyright © GALAXY RESORT ${year} Created by HIMANSU MALLIK`}</h4>
      </footer>
    </>
  );
};

export default Footer;
