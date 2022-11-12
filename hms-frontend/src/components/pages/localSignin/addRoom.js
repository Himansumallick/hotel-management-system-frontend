import React from "react";
import { useState } from "react";
import axios from "axios";

const AddRoom = () => {
  const defaultRoomData = {
    room_number: "",
    occupants_capacity: "",
    number_of_bed: "",
    has_ac: "t",
    is_seafacing: "t",
    has_sunset_view: "t",
    price: "",
  };
  const [roomData, setRoomData] = useState(defaultRoomData);
  const [attachedFiles, setAttachedFiles] = useState([]);

  const onchange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setRoomData({ ...roomData, [inputName]: inputValue });
  };

  // const uploadFile = (e) => {
  //   e.preventDefault();
  //   const data = new FormData();
  //   const roomImg = data.append("file", file);
  //   setRoomData.push({ room_image: roomImg });
  // };

  const AddRoomToDb = async () => {
    const formData = new FormData();
    formData.append("roomData", JSON.stringify(roomData));
    formData.append("file", attachedFiles[0]);
    const response = await axios({
      url: "http://localhost:9000/api/rooms/localSignin/addRoom",
      method: "POST",
      data: formData,
    })
      .then((res) => res.data)
      .catch((error) => {
        console.error(error);
        return { success: false };
      });
    if (response.success) {
      console.log(response);
    } else {
      alert(`Error:  ${response.message}`);
    }
    console.log(formData);
  };

  return (
    <div className="addroom">
      <h2>Add a room</h2>
      <div className="roominfo">
        <div>
          {" "}
          <label>Room Number: </label>
          <input
            type="text"
            name="room_number"
            value={roomData.room_number}
            onChange={onchange}
          />
        </div>
        <div>
          <label>Occupants capacity: </label>
          <input
            type="text"
            name="occupants_capacity"
            value={roomData.occupants_capacity}
            onChange={onchange}
          />
        </div>
        <div>
          <label>Number of bed: </label>
          <input
            type="text"
            name="number_of_bed"
            value={roomData.number_of_bed}
            onChange={onchange}
          />
        </div>
        <div>
          <label>AC: </label>
          <select
            id="has_ac"
            name="has_ac"
            value={roomData.has_ac}
            onChange={onchange}
          >
            <option value="t">Yes</option>
            <option value="f">No</option>
          </select>
        </div>
        <div>
          <label>Seafacing : </label>
          <select
            id="is_seafacing"
            name="is_seafacing"
            value={roomData.is_seafacing}
            onChange={onchange}
          >
            <option value="t">Yes</option>
            <option value="f">No</option>
          </select>
        </div>
        <div>
          <label>Sunset View : </label>
          <select
            id="has_sunset_view"
            name="has_sunset_view"
            value={roomData.has_sunset_view}
            onChange={onchange}
          >
            <option value="t">Yes</option>
            <option value="f">No</option>
          </select>
        </div>
        <div>
          <label>Price($): </label>
          <input
            type="text"
            name="price"
            value={roomData.price}
            onChange={onchange}
          />
        </div>
        {
          <div>
            <label>Room image(Upload a 400×300 JPEG format image): </label>
            <input
              type="file"
              id="room_image"
              name="room_image"
              // value={attachedFiles}
              onChange={(e) => {
                setAttachedFiles(e.target.files);
              }}
            />
          </div>
        }
        <div>
          <input
            type="submit"
            onClick={AddRoomToDb}
            name="form-submit"
            value="Add Room"
          />
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
