import React from "react";

const Hotel = (props) => {
  const handleDetail = (event) => {
    event.preventDefault();
    window.location.replace("/detail");
  };
  return (
    <div className="container">
      <div className="row">
        <h3 className="mt-4 mb-4">Homes guests love</h3>
        {props.hotel.map((hotel, index) => {
          return (
            <div className="col-12 col-lg-3" key={index} onClick={handleDetail}>
              <img src={hotel.image_url} alt={hotel.name} width="100%" />
              <div>
                <u>{hotel.name}</u>
                <br />
                {hotel.city}
                <br />
                <b>Starting from ${hotel.price}</b>
                <br />
                <i className="fa fa-star"> {hotel.rate}</i> {hotel.type}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hotel;
