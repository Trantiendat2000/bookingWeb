import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="form bg-primary mt-5">
      <div>
        <h2>Save time, Save money!</h2>
        <p>Sign up and we'll send the best deals for you</p>
        <form>
          <input type="text" placeholder="Your Email" />
          <button>Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
