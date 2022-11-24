import React from "react";

const HotelType = (props) => {
  return (
    <div className="container">
      <div className="row">
        <h3 className="mt-5 mb-5">Browse by property type</h3>
        {props.type.map((type, index) => {
          return (
            <div className="col-12 col-lg" key={index}>
              <img src={type.image} width="100%" alt={type.name} />
              <div>
                <h4>{type.name}</h4>
                <p>{type.count} hotels</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HotelType;
