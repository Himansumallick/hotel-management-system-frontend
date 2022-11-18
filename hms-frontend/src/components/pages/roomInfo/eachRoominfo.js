import React from "react";
import { useNavigate } from "react-router-dom";
import "./room.css";

function RoomInfoView(props) {
  const {
    room_number,
    occupants_capacity,
    number_of_bed,
    has_ac,
    is_seafacing,
    has_sunset_view,
    price,
    image,
  } = props.eachRoom;
  const navigate = useNavigate();

  return (
    <article className="roomInfoContainer">
      <div className="infodiv">
        <div>
          <h2>Room Number : {room_number}</h2>
        </div>
        <div>
          <h2>Capacity : {occupants_capacity}</h2>
        </div>
        <div>
          <h2>Number of bed : {number_of_bed}</h2>
        </div>
        <div>
          <h2>AC : {has_ac ? "Yes" : "No"} </h2>
        </div>
        <div>
          <h2>Seafacing : {is_seafacing ? "Yes" : "No"}</h2>
        </div>
        <div>
          <h2>Sunset View: {has_sunset_view ? "Yes" : "No"}</h2>
        </div>
        <div>
          <h1>Price: $ {price}</h1>
        </div>
        <div>
          <button
            className="ui green button"
            onClick={() => {
              props.setGlobalData({
                ...props.globalData,
                roomInfo: {
                  room_number: room_number,
                  occupants_capacity: occupants_capacity,
                  number_of_bed: number_of_bed,
                  has_ac: has_ac,
                  is_seafacing: is_seafacing,
                  has_sunset_view: has_sunset_view,
                  price: price,
                  image: image,
                },
              });
              navigate("/booking/bookingPage");
            }}
          >
            Book Now
          </button>{" "}
          {/* <Link to="/booking/bookingPage">
            
          </Link> */}
        </div>
      </div>
      <div className="imgdiv">
        <div>{image && <img alt="room_image" src={image} />}</div>
      </div>
    </article>
  );
}

export default RoomInfoView;
