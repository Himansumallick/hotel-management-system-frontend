import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "../services/service.css";
import Navbar from "../../Navbar";

const service = () => {
  return (
    <div className="service_container">
      <Navbar />
      <div className="food">
        <Link className="fbtn" to="food">
          <button class="ui orange button">FOOD</button>{" "}
        </Link>
      </div>
      <div className="transport">
        <Link className="tbtn" to="transport">
          <button class="ui black button">TRANSPORT</button>{" "}
        </Link>
      </div>
      <div className="music">
        <Link className="mbtn" to="music">
          <button class="ui green button">MUSIC</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default service;
