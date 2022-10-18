import React, { useEffect, useState } from "react";
import EachRoom from "../roomInfo/eachRoominfo.js";
import { fetchAllRooms } from "../roomInfo/room.js";
import "./room.css";

const RoomList = () => {
  const [rooms, setRooms] = useState([]);

  const getAllRooms = async () => {
    try {
      const response = await fetchAllRooms();
      setRooms(response);
    } catch (e) {
      setRooms([]);
      alert("An error occurred");
    }
  };

  useEffect(() => {
    getAllRooms();
  }, []);

  return (
    <section className="roomList">
      {rooms.map((eachRoom, index) => {
        return <EachRoom key={eachRoom.id} eachRoom={eachRoom}></EachRoom>;
      })}
    </section>
  );
};

export default RoomList;
