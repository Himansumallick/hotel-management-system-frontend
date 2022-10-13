import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import SignIn from "./pages/signIn";
import Home from "./pages/Home";

function Navbar() {
  return (
    <>
      <div class="nav_wrapper">
        <div class="box a">
          <Link to="/" className="navbar-logo" element={<Home />}>
            <h1>
              GALAXY
              <i class="fa-sharp fa-solid fa-hotel"></i>
              RESORT
            </h1>
          </Link>
        </div>
        <div class="box b">
          <Link to="/" className="nav-links" element={<Home />}>
            HOME
          </Link>
        </div>
        <div class="box c">
          <Link to="/services" className="nav-links">
            SERVICES
          </Link>
        </div>
        <div class="box d">
          <Link to="/signin" className="nav-links">
            SIGNIN
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
