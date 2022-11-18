import React from "react";
import { Button } from "semantic-ui-react";
import "../pages/Dashboardbody.css";
import RoomList from "./roomInfo/roomList";

const Dashboardbody = (props) => {
  return (
    <div className="dashboard">
      <div className="searchbar">
        <div className="checkin">
          <div>
            <h3>From</h3>
          </div>
          <div>
            <input type="date" placeholder="CheckIn" />
          </div>
        </div>
        <div className="checkout">
          <div>
            <h3>To</h3>
          </div>
          <div>
            <input type="date" placeholder="CheckOut" />
          </div>
        </div>
        <div className="occupants">
          <div>
            <input
              type="number"
              placeholder="No. of and adults and childrens"
            />
          </div>
        </div>
        <div className="search">
          <div>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div>
            <Button basic inverted color="purple">
              Search
            </Button>
          </div>
        </div>
      </div>
      <div className="room_info">
        <RoomList
          globalData={props.globalData}
          setGlobalData={props.setGlobalData}
        />
      </div>
    </div>
  );
};

export default Dashboardbody;
