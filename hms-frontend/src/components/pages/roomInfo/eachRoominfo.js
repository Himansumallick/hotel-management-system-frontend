import React from "react";

function roomInfoView(props) {
  const {
    room_number,
    occupants_capacity,
    no_of_bed,
    has_ac,
    is_seafacing,
    has_sunset_view,
    price,
  } = props.eachRoom;
  return (
    <article className="roominfo">
      <h2>Room Number : {room_number}</h2>
      <h2>Capacity : {occupants_capacity}</h2>
      <h2>Number of bed : {no_of_bed}</h2>
      <h2>AC : {has_ac} </h2>
      <h2>Seafacing : {is_seafacing}</h2>
      <h2>Sunset View: {has_sunset_view}</h2>
      <h1>Price: {price}</h1>
      <button
        class="ui green button"
        onClick={() => {
          alert("booked");
        }}
      >
        Book Now
      </button>{" "}
    </article>
  );
}

export default roomInfoView;
