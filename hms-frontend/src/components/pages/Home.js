import React from "react";
import "../../App.css";
import img1 from "/home/himansu/Desktop/Projects/HMS/hotel-management-system-frontend/hms-frontend/src/images/room1.jpeg";
import img2 from "/home/himansu/Desktop/Projects/HMS/hotel-management-system-frontend/hms-frontend/src/images/room2.jpeg";
import img3 from "/home/himansu/Desktop/Projects/HMS/hotel-management-system-frontend/hms-frontend/src/images/room3.jpeg";
import img6 from "/home/himansu/Desktop/Projects/HMS/hotel-management-system-frontend/hms-frontend/src/images/logo.png";

const Home = () => {
  const year = new Date().getFullYear();
  return (
    <>
      {/* Navbar */}
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
      {/* First Container */}
      <div class="container-fluid bg-1 text-center">
        <h3 class="margin">Book your Rooms!</h3>
        <img
          src={img6}
          class="img-responsive img-circle margin"
          style={{ display: "inline" }}
          alt="Logo"
          width="100"
          height="100"
        />
        <h3>For exciting holidays</h3>
      </div>
      {/* Second Container */}
      <div class="container-fluid bg-2 text-center">
        <h3 class="margin">Rooms you are looking for </h3>
        <p>Book Your Rooms Now</p>
        <a href="/BookingPage" class="btn btn-default btn-lg">
          <span class="glyphicon glyphicon-search"></span> BOOK
        </a>
      </div>
      {/* Third Container (Grid) */}
      <div class="container-fluid bg-3 text-center">
        <h3 class="margin">ROOMS YOU CAN LOOK FOR</h3>
        <br />
        <div class="row">
          <div class="col-sm-4">
            <p> Feel The Luxory</p>
            <img
              src={img1}
              class="img-responsive margin"
              style={{ width: "100%" }}
              alt="Image1"
            />
          </div>
          <div class="col-sm-4">
            <p>Pour Your Creativity</p>
            <img
              src={img2}
              class="img-responsive margin"
              style={{ width: "100%" }}
              alt="Image2"
            />
          </div>
          <div class="col-sm-4">
            <p>Enjoy The Sunset</p>
            <img
              src={img3}
              class="img-responsive margin"
              style={{ width: "100%" }}
              alt="Image3"
            />
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer class="container-fluid bg-4 text-center">
        <h4>{`Copyright © GALAXY RESORT ${year} Created by HIMANSU MALLIK`}</h4>
      </footer>
    </>
  );
};

export default Home;
