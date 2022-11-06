import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "../localUser/localUser.css";

function localUser() {
  return (
    <>
      <div>
        <div className="localUser">
          <div className="first">
            <Link to="/addRoom">
              {" "}
              <Button color="grey">Add a Room</Button>
            </Link>
          </div>
          <div className="second">
            {" "}
            <Link to="/bookingPage">
              <Button color="grey">Book a room</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default localUser;
