import React from "react";
import "./City.css";

const City = (props) => {
  return (
    <div className="container">
      <div className="row">
        {props.city.map((city, index) => {
          return (
            <div className="col-12 col-lg-4 city" key={index}>
              <img src={city.image} width="100%" alt={city.name} />
              <div className="city-text">
                <h2>{city.name}</h2>
                <h3>{city.subText}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default City;
