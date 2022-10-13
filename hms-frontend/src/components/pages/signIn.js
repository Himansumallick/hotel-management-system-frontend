import React from "react";
import { Link } from "react-router-dom";
import "../pages/signIn.css";
import LogoImg from "/home/himansu/Desktop/Projects/HMS/hotel-management-system-frontend/hms-frontend/src/media/logo-color.png";

const SignIn = () => {
  return (
    <>
      <div className="wrapper">
        <div className="container1">
          <div className="container2">
            <div className="logo">
              <img src={LogoImg} alt="Logo" />
            </div>
            <div className="email">
              <h3>
                Email <i class="fa-solid fa-envelope"></i>
              </h3>
              <div>
                <input type="email" placeholder="john@gmail.com" />
              </div>
            </div>
            <div className="password">
              <h3>
                Password <i class="fa-solid fa-lock"></i>
              </h3>
              <div>
                <input type="password" />
              </div>
            </div>
            <div>
              <Link to="/dashboard">
                <button class="ui inverted purple button">Submit</button>
              </Link>
            </div>
          </div>
          <div className="footer">
            <Link to="/signUp">SignUp</Link>
            <Link to="/passwordRecovery">Forgot Password</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
