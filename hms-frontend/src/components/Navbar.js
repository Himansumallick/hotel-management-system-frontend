import React from "react";
import "./Navbar.css";

function Navbars() {
  return (
    <>
      <nav class="navbar navbar-default ">
        <div class="container ">
          <div class="navbar-header ">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand " href="/home">
              GALAXY
              <i className="fa-sharp fa-solid fa-hotel"></i>
              RESORT
            </a>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a href="/home">HOME</a>
              </li>
              <li>
                <a href="/services">SERVICES</a>
              </li>
              <li>
                <a href="/localSignin/signin">SIGNIN</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbars;
