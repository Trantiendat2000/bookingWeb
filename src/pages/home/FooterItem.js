import React from "react";
import "./FooterItem.css";

const FooterItem = (props) => {
  return (
    <div>
      {props.items.map((item, index) => {
        return (
          <div className="footer-item" key={index}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default FooterItem;
