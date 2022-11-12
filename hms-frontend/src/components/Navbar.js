import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Home from "./pages/Home";

function Navbar() {
  return (
    <>
      <div className="nav_wrapper">
        <div className="box a">
          <Link to="/" className="navbar-logo" element={<Home />}>
            <h1>
              GALAXY
              <i className="fa-sharp fa-solid fa-hotel"></i>
              RESORT
            </h1>
          </Link>
        </div>
        <div className="box b">
          <Link to="/" className="nav-links" element={<Home />}>
            HOME
          </Link>
        </div>
        <div className="box c">
          <Link to="/services" className="nav-links">
            SERVICES
          </Link>
        </div>
        <div className="box d">
          <Link to="/localSignin/signin" className="nav-links">
            SIGNIN
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
