import React from "react";
import "./SearchList.css";

const SearchList = (props) => {
  const HandleDetail = (event) => {
    event.preventDefault();
    window.location.replace("/detail");
  };
  return (
    <div className="container">
      <div className="search-list">
        {props.search.map((search, index) => {
          return (
            <div className="row" key={index} onClick={HandleDetail}>
              <div className="col-12 col-lg-3">
                <img src={search.image_url} alt={search.name} width="100%" />
              </div>
              <div className="col-12 col-lg-6">
                <h3>{search.name}</h3>
                <p>{search.distance} from center</p>
                <p>
                  <span>{search.tag}</span>
                </p>
                <b>{search.description}</b>
                <p>{search.type}</p>
                {search.free_cancel ? (
                  <div className="free-cancel">
                    <b>Free cancellation</b>
                    <br />
                    <p>
                      You can cancel later, so lock in this great price today!
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="col-12 col-lg-3 rate-fee">
                <div className="rate">
                  <p> {search.rate_text}</p>
                  <i className="fa fa-star"> {search.rate}</i>
                </div>
                <div className="fee">
                  <p>${search.price}</p>
                  <p>Includes taxes and fees</p>
                  <button>See availability</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchList;
