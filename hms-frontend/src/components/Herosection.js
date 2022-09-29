import React from "react";
import { Button, Segment, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./Herosection.css";
import "../App.css";

function Herosection() {
  return (
    <div className="hero-container">
      <video
        src="https://www.youtube.com/watch?v=K1QICrgxTjA"
        autoPlay
        loop
        muted
      />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button inverted color="purple">
          Get Started
        </Button>
        <Button inverted color="purple">
          Watch Trailer <i class="fa-regular fa-circle-play"></i>
        </Button>
      </div>
    </div>
  );
}

export default Herosection;
