import React from "react";
import "./Herosection.css";
import img1 from "/home/himansu/Desktop/Projects/HMS/hotel-management-system-frontend/hms-frontend/src/images/room1.jpeg";
import img2 from "/home/himansu/Desktop/Projects/HMS/hotel-management-system-frontend/hms-frontend/src/images/room2.jpeg";
import img3 from "/home/himansu/Desktop/Projects/HMS/hotel-management-system-frontend/hms-frontend/src/images/room3.jpeg";
import img6 from "/home/himansu/Desktop/Projects/HMS/hotel-management-system-frontend/hms-frontend/src/images/logo.png";

function Herosection() {
  return (
    <>
      {/* First Container */}
      <div class="container-fluid bg-1 text-center">
        <h3 class="margin">Book your Rooms!</h3>
        <img
          src={img6}
          class="img-responsive img-circle margin"
          style={{ display: "inline" }}
          alt="Logo"
          width="100px"
          height="100px"
        />
        <h3>For exciting holidays</h3>
      </div>
      {/* Second Container */}
      <div class="container-fluid bg-2 text-center">
        <h3 class="margin">Rooms you are looking for </h3>
        <p>Book Your Rooms Now</p>
        <a href="/booking/BookingPage" class="btn btn-default btn-lg">
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
    </>
  );
}

export default Herosection;
