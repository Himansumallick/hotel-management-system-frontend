import React from "react";
import { Link } from "react-router-dom";
import "../bookings/bookingPage.css";

function bookingPage() {
  return (
    <div className="bookingForm">
      <form action="">
        <div>
          <h2>Please fill the form in order to book a room</h2>
        </div>
        <div>
          Room number: <input type="number" required />
        </div>
        <div>
          CheckIn Date: <input type="date" name="indate" id="indate" required />
        </div>
        <div>
          CheckOut Date:{" "}
          <input type="date" name="outdate" id="outdate" required />
        </div>
        <div>
          Booked By: <input type="text" maxLength={20} required />
        </div>
        <div>
          Contact Number: <input type="tel" maxLength={13} required />
        </div>
        <div>
          Number of Guest:{" "}
          <input type="Number" list="numberOfGuest" min={1} required />
          <datalist id="numberOfGuest">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </datalist>
        </div>
        <div>
          <Link to="/bookingConfirmationPage">
            <button> Next </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default bookingPage;
