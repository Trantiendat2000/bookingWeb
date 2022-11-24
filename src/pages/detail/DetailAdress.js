import React from "react";
import "./DetailAdress.css";

const DetailAdress = (props) => {
  return (
    <div className="container">
      {props.adress.map((adress, index) => {
        return (
          <div className="detail-address" key={index}>
            <div>
              <h3>{adress.name}</h3>
              <p>
                <i className="fa fa-map-marker"> {" " + adress.address}</i>
              </p>
              <p className="text-primary">{adress.distance}</p>
              <p className="text-success">{adress.price}</p>
            </div>
            <div>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DetailAdress;
