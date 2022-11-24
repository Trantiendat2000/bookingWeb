import React from "react";
import "./DetailInfo.css";

const DetailInfo = (props) => {
  return (
    <div className="container">
      {props.info.map((info, index) => {
        return (
          <div className="row" key={index}>
            <div className="col-12 col-lg-9">
              <h2>{info.title}</h2>
              <p>{info.description}</p>
            </div>
            <div className="col-12 col-lg-3 box-book">
              <h4>Perfect for a 9-night stay!</h4>
              <p>
                Located in the real heart of Krakow this property has an
                excellent location of 9.8!
              </p>
              <div>${info.nine_night_price} (9 nights)</div>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DetailInfo;
