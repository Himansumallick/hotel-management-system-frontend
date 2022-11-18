import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const defaultRoomInfo = {
    room_number: "",
    occupants_capacity: "",
    number_of_bed: "",
    has_ac: "t",
    is_seafacing: "t",
    has_sunset_view: "t",
    price: "",
    image: "",
  };

  const [globalData, setGlobalData] = useState({
    roomInfo: defaultRoomInfo,
  });

  return (
    <div>
      <Outlet context={[globalData, setGlobalData]} />
    </div>
  );
}

export default App;
