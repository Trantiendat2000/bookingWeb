import React from "react";
import NavBarItem from "./NavBarItem";

const NavBar = (props) => {
  return (
    <div className="p-3 bg-primary px-5">
      <div className="d-flex justify-content-between text-white">
        <h2>Booking Website</h2>
        <div>
          <button className="mx-1">Regiter</button>
          <button className="mx-3">Login</button>
        </div>
      </div>
      {props.navbar.map((item, index) => (
        <NavBarItem
          type={item.type}
          icon={item.icon}
          active={item.active}
          key={index}
        />
      ))}
    </div>
  );
};

export default NavBar;
