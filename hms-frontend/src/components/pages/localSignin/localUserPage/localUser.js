import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "/home/himansu/Desktop/Projects/HMS/hotel-management-system-frontend/hms-frontend/src/components/pages/localSignin/localUserPage/localUser.js";

function localUser() {
  return (
    <>
      <div>
        <div className="localUser">
          <div className="first">
            <Link to="/localSignin/addRoom">
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
