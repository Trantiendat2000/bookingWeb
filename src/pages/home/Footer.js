import React from "react";
import FooterItem from "./FooterItem";

const Footer = (props) => {
  return (
    <div className="container mt-5">
      <div className="row">
        {props.footer.map((item) => {
          return (
            <div className="col-12 col-lg" key={item.col_number}>
              <FooterItem items={item.col_values} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
