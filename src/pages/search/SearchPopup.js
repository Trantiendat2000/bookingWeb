import React from "react";
import "./SearchPopup.css";

const SearchPopup = () => {
  return (
    <div className="container mt-5 mx-5">
      <form className="search-popup">
        <h3>Search</h3>
        <label htmlFor="place">Destination</label>
        <br />
        <input type="text" id="place" />
        <label htmlFor="date">Check-in Date</label>
        <br />
        <input type="date" id="date" /> To <input type="date" />
        {/*  */}
        <h5>Options</h5>
        <div className="search-option row">
          <div className="col-12 col-lg">
            <label htmlFor="min-price">Min price per night</label>
            <label htmlFor="max-price">Max price per night</label>
            <label htmlFor="aldult">Aldult</label>
            <label htmlFor="children">Children</label>
            <label htmlFor="room">Room</label>
          </div>
          <div className="col-12 col-lg-3">
            <input type="number" id="min-price" />
            <input type="number" id="max-price" />
            <input type="number" id="aldult" />
            <input type="number" id="children" />
            <input type="number" id="room" />
          </div>
        </div>
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchPopup;
