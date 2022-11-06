import { useState } from "react";
import { Outlet } from "react-router-dom";

const BookingContainer = () => {
  const [bookingData, setBookingData] = useState({ name: "rupak" });
  return <Outlet context={[bookingData, setBookingData]} />;
};

export default BookingContainer;
