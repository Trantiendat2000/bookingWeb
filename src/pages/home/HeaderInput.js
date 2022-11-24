import React, { useState } from "react";
import "./HeaderInput.css";

const HeaderInput = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const handleSearch = (event) => {
    event.preventDefault();
    window.location.replace("/search");
  };
  return (
    <div className="container">
      <form className="header-input">
        <div>
          <label>
            <span className="fa fa-bed fa-lg"></span>
          </label>
          <input type="text" placeholder="Where are you going?" />
        </div>
        <div className="date-input">
          <label>
            <span className="fa fa-calendar fa-lg"></span>
          </label>
          <input type="date" />
          <label>to</label>
          <input type="date" />
        </div>
        <div className="room-input">
          <label>
            <span className="fa fa-female fa-lg"></span>
          </label>
          <input type="number" placeholder="0" />
          <label>Adult</label>
          <input type="number" placeholder="0" />
          <label>Children</label>
          <input type="number" placeholder="0" />
          <label>Room</label>
        </div>
        <button onClick={handleSearch}>Search</button>
      </form>
    </div>
  );
};

export default HeaderInput;
