import React from "react";
import "./NavBarItem.css";

const NavBarItem = (props) => {
  return (
    <div className="navbar-item">
      <a href="/" className={props.active ? "active" : ""}>
        <span className={`fa ${props.icon} fa-lg`}> {props.type}</span>
      </a>
    </div>
  );
};

export default NavBarItem;
