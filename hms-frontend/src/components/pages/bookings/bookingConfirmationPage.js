import React from "react";
import { useOutletContext } from "react-router-dom";

const BookingConfirmationPage = () => {
  const [bookingData] = useOutletContext();

  const {
    roomNumber,
    inDate,
    outDate,
    bookedBy,
    contactNumber,
    numberOfGuest,
  } = bookingData;

  return (
    <div className="bookingConfirmationPage">
      <form action="">
        <div>Confirmation Page</div>
        <div>Room number:{roomNumber}</div>
        <div>CheckIn Date:{inDate}</div>
        <div>CheckOut Date:{outDate}</div>
        <div>Booked By:{bookedBy}</div>
        <div>Contact Number:{contactNumber}</div>
        <div>Number of Guest:{numberOfGuest}</div>
        <div className="payment"></div>
      </form>
    </div>
  );
};

export default BookingConfirmationPage;
