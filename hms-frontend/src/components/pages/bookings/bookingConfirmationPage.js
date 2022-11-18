import React from "react";
import { useOutletContext } from "react-router-dom";

const BookingConfirmationPage = () => {
  const [bookingData, , globalData] = useOutletContext();

  const {
    //roomNumber,
    inDate,
    outDate,
    bookedBy,
    contactNumber,
    numberOfGuest,
  } = bookingData;

  const {
    room_number,
    //occupants_capacity,
    number_of_bed,
    //has_ac,
    //is_seafacing,
    //has_sunset_view,
    price,
    image,
  } = globalData.roomInfo;

  const updateBookingTable = () => {};

  const differnce = Math.abs(new Date(outDate) - new Date(inDate));
  const NumberOfDaysStayed = Math.ceil(differnce / (1000 * 3600 * 24));
  const totalPrice = NumberOfDaysStayed * price;

  return (
    <div className="bookingConfirmationPage">
      <div>Confirmation Page</div>
      <div>{image}</div>
      <div>Room number:{room_number}</div>
      <div>CheckIn Date:{inDate}</div>
      <div>CheckOut Date:{outDate}</div>
      <div>Booked By:{bookedBy}</div>
      <div>Contact Number:{contactNumber}</div>
      <div>Number of Guest:{numberOfGuest}</div>
      <div>number of bed: {number_of_bed}</div>
      <div className="payment">
        <div>Room cost: {price}</div>
        <div>Total cost: {totalPrice}</div>
      </div>
      <div>
        <button onClick={updateBookingTable}>Confirm Booking</button>
      </div>
    </div>
  );
};

export default BookingConfirmationPage;
