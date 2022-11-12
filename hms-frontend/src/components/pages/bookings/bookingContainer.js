import { useEffect } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const defaultFormValue = {
  roomNumber: "",
  inDate: "",
  outDate: "",
  bookedBy: "",
  contactNumber: "",
  numberOfGuest: "",
};

const BookingContainer = () => {
  const [bookingData, setBookingData] = useState(defaultFormValue);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const bookingDataFromUrl = {};
    params.forEach((value, key) => {
      bookingDataFromUrl[key] = value;
    });
    setBookingData({ ...bookingData, ...bookingDataFromUrl });
  }, []);

  return <Outlet context={[bookingData, setBookingData]} />;
};

export default BookingContainer;
