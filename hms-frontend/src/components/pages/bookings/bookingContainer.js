import React, { useEffect } from "react";
import { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";

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
  const [globalData, setGlobalData] = useOutletContext();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const bookingDataFromUrl = {};
    params.forEach((value, key) => {
      bookingDataFromUrl[key] = value;
    });
    setBookingData({ ...bookingData, ...bookingDataFromUrl });
  }, []);

  return (
    <Outlet
      context={[bookingData, setBookingData, globalData, setGlobalData]}
    />
  );
};

export default BookingContainer;
