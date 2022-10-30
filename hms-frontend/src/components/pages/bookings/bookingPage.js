import React from "react";
import { Link } from "react-router-dom";
import "../bookings/bookingPage.css";

function bookingPage(props) {
  var roomNumber = document.getElementById("roomNumber").value;
  localStorage.setItem("roomNumber", roomNumber);

  var checkinDate = document.getElementById("checkinDate").value;
  localStorage.setItem("checkinDate", checkinDate);

  var checkoutoutDate = document.getElementById("checkoutoutDate").value;
  localStorage.setItem("checkoutoutDate", checkoutoutDate);

  var bookedBy = document.getElementById("bookedBy").value;
  localStorage.setItem("bookedBy", bookedBy);

  var contactNumber = document.getElementById("contactNumber").value;
  localStorage.setItem("contactNumber", contactNumber);

  var numberOfGuest = document.getElementById("numberOfGuest").value;
  localStorage.setItem("numberOfGuest", numberOfGuest);

  return (
    <div className="bookingForm">
      <table>
        <tr>
          <td colSpan={2}>
            <h2>Booking Information</h2>
          </td>
        </tr>
        <tr>
          <td text-align="right">Room number:</td>
          <td>
            <input id="roomNumber" type="number" required />
          </td>
        </tr>
        <tr>
          <td>CheckIn Date:</td>
          <td>
            <input type="date" name="indate" id="checkinDate" required />
          </td>
        </tr>
        <tr>
          <td> CheckOut Date:</td>
          <td>
            <input type="date" name="outdate" id="checkoutoutDate" required />
          </td>
        </tr>
        <tr>
          <td>Booked By:</td>
          <td>
            <input id="bookedBy" type="text" maxLength={20} required />
          </td>
        </tr>
        <tr>
          <td>Contact Number:</td>
          <td>
            <input id="contactNumber" type="tel" maxLength={13} required />
          </td>
        </tr>
        <tr>
          <td>Number of Guest:</td>
          <td>
            <input
              id="numberOfGuest"
              type="Number"
              list="numberOfGuest"
              min={1}
              required
            />
            <datalist id="numberOfGuest">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </datalist>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <Link to="/bookingConfirmationPage">
              <button> Next </button>
            </Link>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default bookingPage;
