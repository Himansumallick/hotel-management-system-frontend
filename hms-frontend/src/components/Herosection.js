import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./Herosection.css";
import "../App.css";
import bgvideo from "../media/Time Lapse Video Of Night Sky.mp4";
import trailerVideo from "../media/Time Lapse Video Of Night Sky.mp4";

function Herosection() {
  return (
    <div className="hero-container">
      <video src={bgvideo} type="video/mp4" loop autoPlay className="myVideo" />
      <h1>ADVENTURE AWAITS</h1>
      <p>BOOK YOUR ROOMS NOW</p>
      <div className="hero-btns">
        <Link to="/dashboard">
          <Button inverted color="purple">
            Get Started
          </Button>
        </Link>
        <Link to={trailerVideo}>
          <Button inverted color="purple">
            Watch Trailer <i class="fa-regular fa-circle-play"></i>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Herosection;
