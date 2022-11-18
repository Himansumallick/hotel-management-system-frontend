import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import "../bookings/bookingPage.css";

const BookingPage = (props) => {
  const [bookingData, setBookingData] = useOutletContext();
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/booking/bookingConfirmationPage");
  };

  const onChange = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;
    setBookingData({ ...bookingData, [inputName]: value });
  };

  return (
    <div className="bookingForm">
      <form>
        <div>
          <h2>Booking Information</h2>
        </div>
        <div>
          <h3>Room number:</h3>
          <input
            type="text"
            id="roomNumber"
            name="roomNumber"
            value={bookingData.roomNumber}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <h3>CheckIn Date:</h3>
          <input
            type="date"
            name="inDate"
            id="inDate"
            value={bookingData.inDate}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <h3>CheckOut Date:</h3>
          <input
            type="date"
            name="outDate"
            id="outDate"
            value={bookingData.outDate}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <h3>Booked By:</h3>
          <input
            type="text"
            maxLength={20}
            id="bookedBy"
            name="bookedBy"
            value={bookingData.bookedBy}
            onChange={onChange}
            required
          />
        </div>
        <div>
          {" "}
          <h3>Contact Number:</h3>
          <input
            type="text"
            maxLength={13}
            id="contactNumber"
            name="contactNumber"
            value={bookingData.contactNumber}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <h3> Number of Guest(Maximum 4):</h3>
          <input
            type="text"
            min={1}
            id="numberOfGuest"
            name="numberOfGuest"
            value={bookingData.numberOfGuest}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <button onClick={handleSubmit}> Next </button>
        </div>
      </form>
    </div>
  );
};

export default BookingPage;
