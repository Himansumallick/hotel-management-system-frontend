import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "semantic-ui-react";
import "/home/himansu/Desktop/Projects/HMS/hotel-management-system-frontend/hms-frontend/src/components/pages/localSignin/signIn.css";
import LogoImg from "/home/himansu/Desktop/Projects/HMS/hotel-management-system-frontend/hms-frontend/src/media/logo-color.png";

const SignIn = () => {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      setIsLoggedin(true);
    }
  });

  const authenticate = async () => {
    const response = await axios({
      url: "http://localhost:9000/api/rooms/signin",
      method: "POST",
      data: { userid: userid, password: password },
    })
      .then((res) => res.data)
      .catch((error) => {
        console.error(error);
        return { success: false };
      });

    if (response.success) {
      localStorage.setItem("user-info", JSON.stringify(response));
      console.log(response);
      navigate("/localSignin/signin");
      setIsLoggedin(true);
      setUserid("");
      setPassword("");
    } else {
      alert(`Error:  ${response.message}`);
    }
  };

  const Signout = () => {
    localStorage.removeItem("user-info");
    setIsLoggedin(false);
  };

  return (
    <>
      <div
        style={{
          textAlign: "center",
          background: "rgb(29, 30, 30)",
          color: "rgb(177, 166, 65)",
        }}
      >
        <h1>For LocalUser</h1>
        {!isLoggedin ? (
          <>
            <div className="wrapper">
              <div className="container1">
                <div className="container2">
                  <div className="logo">
                    <img src={LogoImg} alt="Logo" />
                  </div>
                  <div className="Userid">
                    <h3>
                      UserId <i className="fa-solid fa-envelope"></i>
                    </h3>
                    <div>
                      <input
                        id="userid"
                        type="text"
                        onChange={(e) => setUserid(e.target.value)}
                        placeholder="john@gmail.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="password">
                    <h3>
                      Password <i className="fa-solid fa-lock"></i>
                    </h3>
                    <div>
                      <input
                        id="password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      className="ui inverted purple button"
                      onClick={authenticate}
                    >
                      Submit
                    </button>
                  </div>
                </div>
                <div className="signfooter">
                  <Link className="signup" to="/signUp">
                    SignUp
                  </Link>
                  <Link className="recovery" to="/passwordRecovery">
                    Forgot Password
                  </Link>
                </div>
                <div id="message"></div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <h2>LocalUser LoggedIn</h2>
              <div className="localUser">
                <div className="first">
                  <Link to="/localSignin/addRoom">
                    {" "}
                    <Button color="grey">Add a Room</Button>
                  </Link>
                </div>
                <div className="second">
                  {" "}
                  <Link to="/booking/bookingPage">
                    <Button color="grey">Book a room</Button>
                  </Link>
                </div>
                <div className="third">
                  <Button color="grey" onClick={Signout}>
                    Signout
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SignIn;
