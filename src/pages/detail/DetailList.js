import React from "react";

const DetailList = (props) => {
  return (
    <div className="container">
      <div className="row">
        {props.list.photos.map((list, index) => {
          return (
            <div className="col-12 col-lg-4 mb-4" key={index}>
              <img src={list} width="100%" alt="room detail" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailList;
