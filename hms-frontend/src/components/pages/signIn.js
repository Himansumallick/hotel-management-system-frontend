import React from "react";
import { Icon } from "semantic-ui-react";

function signIn() {
  return (
    <div className="signin-container">
      <div className="signin-frame">
        <img src="" alt="" className="logo-img" />
        <div className="email">
          <label htmlFor="email"> Email</label>
          <div className="email-input">
            <Icon size="1.3em" name="mail" />
            <input
              className="email"
              style={{
                width: "90%",
                height: "30px",
                background: "#f8f8f8",
                borderRadius: "8px",
              }}
              type="email"
              name="email"
              placeholder=""
            />
          </div>
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <div className="sec-password-inputs">
            <Icon size="1.3em" name="lock" />
            <input
              style={{
                width: "90%",
                height: "30px",
                background: "#f8f8f8",
                borderRadius: "8px",
              }}
              className="password"
              type="password"
              name="password"
              placeholder=""
            />
          </div>
        </div>
      </div>
      <button className="login">Login </button>
      <div className="footer">
        <span>Signup</span>
        <span>Forgot Password?</span>
      </div>
    </div>
  );
}

export default signIn;
