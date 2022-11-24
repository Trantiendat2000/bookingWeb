import React, { Component } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import City from "./City";
import HotelType from "./HotelType";
import Hotel from "./Hotel";
import Form from "./Form";
import Footer from "./Footer";
import {
  DUMMY_CITY,
  DUMMY_TYPE,
  DUMMY_HOTEL,
  NAVBAR,
  DUMMY_FOOTER,
} from "./shared/homapage";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbar: NAVBAR,
      city: DUMMY_CITY,
      type: DUMMY_TYPE,
      hotel: DUMMY_HOTEL,
      footer: DUMMY_FOOTER,
    };
  }

  render() {
    return (
      <div>
        <NavBar navbar={this.state.navbar} />
        <Header />
        <City city={this.state.city} />
        <HotelType type={this.state.type} />
        <Hotel hotel={this.state.hotel} />
        <Form />
        <Footer footer={this.state.footer} />
      </div>
    );
  }
}

export default Home;
