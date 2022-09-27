import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            GALAXY
            <i class="fa-sharp fa-solid fa-hotel"></i>
            RESORT
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {/* <i
              className={
                click ? "fa-solid fa-xmark" : "fa-solid fa-bars-staggered"
              }
            /> */}
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/signIn"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Sign In
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/signUp"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
