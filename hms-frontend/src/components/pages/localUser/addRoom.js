import React from "react";

const addRoom = () => {
  return (
    <div className="addroom">
      <h2>Add a room</h2>
      <form action="" className="roominfo">
        <div>
          {" "}
          <label htmlFor="room_number">Room Number: </label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="occupants_capacity">Occupants capacity: </label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="number_of_bed">Number of bed: </label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="has_ac">AC: </label>
          <input type="checkbox" id="act" name="AC" value="true" />
          <label for="true"> Yes</label>
          <input type="checkbox" id="acf" name="AC" value="false" />
          <label for="false"> No</label>
        </div>
        <div>
          <label htmlFor="is_seafacing">Seafacing: </label>
          <input type="checkbox" id="seat" name="seafacing" value="true" />
          <label for="true"> Yes</label>
          <input type="checkbox" id="seaf" name="seafacing" value="false" />
          <label for="false"> No</label>
        </div>
        <div>
          <label htmlFor="has_sunset_view">Sunset View: </label>
          <input type="checkbox" id="sunt" name="sunset" value="true" />
          <label for="true"> Yes</label>
          <input type="checkbox" id="vehicle2" name="sunset" value="false" />
          <label for="false"> No</label>
        </div>
        <div>
          <label htmlFor="price">Price($): </label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="image">
            Room image(Upload a 400×300 JPEG format image):{" "}
          </label>
          <input type="file" id="roomimg" name="roomimg" />
        </div>
        <div>
          <input type="submit" value="Add Room" />
        </div>
      </form>
    </div>
  );
};

export default addRoom;
