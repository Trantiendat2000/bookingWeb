import React from "react";
import "./Header.css";
import HeaderInput from "./HeaderInput";

const Header = () => {
  return (
    <div>
      <div className="header bg-primary text-white px-5">
        <h1>A lifetime of discount? It's Genius</h1>
        <h3>
          Get rewarded for your travels - unlock instant savings of 10% or more{" "}
          with a freeaccount{" "}
        </h3>
        <button>Sign in / Register</button>
      </div>
      <HeaderInput />
    </div>
  );
};

export default Header;
