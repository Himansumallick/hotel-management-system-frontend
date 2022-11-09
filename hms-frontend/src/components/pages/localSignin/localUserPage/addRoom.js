import React from "react";

const AddRoom = () => {
  const AddRoomToDb = () => {
    alert("hello");
  };

  return (
    <div className="addroom">
      <h2>Add a room</h2>
      <form className="roominfo">
        <div>
          {" "}
          <label>Room Number: </label>
          <input type="text" />
        </div>
        <div>
          <label>Occupants capacity: </label>
          <input type="text" />
        </div>
        <div>
          <label>Number of bed: </label>
          <input type="text" />
        </div>
        <div>
          <label>AC: </label>
          <input type="radio" id="act" name="AC" value="true" />
          <label>Yes </label>
          <input type="radio" id="acf" name="AC" value="false" />
          <label>No </label>
        </div>
        <div>
          <label>Seafacing: </label>
          <input type="radio" id="seat" name="seafacing" value="true" />
          <label>Yes </label>
          <input type="radio" id="seaf" name="seafacing" value="false" />
          <label>No </label>
        </div>
        <div>
          <label>Sunset View: </label>
          <input type="radio" id="sunt" name="sunset" value="true" />
          <label>Yes </label>
          <input type="radio" id="vehicle2" name="sunset" value="false" />
          <label>No </label>
        </div>
        <div>
          <label>Price($): </label>
          <input type="text" />
        </div>
        <div>
          <label>Room image(Upload a 400×300 JPEG format image): </label>
          <input type="file" id="roomimg" name="roomimg" />
        </div>
        <div>
          <button onClick={AddRoomToDb}>Add Room</button>
        </div>
      </form>
    </div>
  );
};

export default AddRoom;
