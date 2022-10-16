import React from "react";
import { ReactDOM } from "react-dom";
import EachRoom from "../roomInfo/eachRoominfo.js";
import Rooms from "../roomInfo/room.js";

function roomList() {
  return (
    <section className="roomList">
      {Rooms.map((eachRoom, index) => {
        return <EachRoom key={eachRoom.id} eachRoom={eachRoom}></EachRoom>;
      })}
    </section>
  );
}

export default roomList;
