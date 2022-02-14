import React, { Component } from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="center">
        <div className="row">
          <button className="button">
            <img
              className="image"
              src={require("../../images/car.svg").default}
              alt=""
            ></img>
          </button>
        </div>
      </div>

      <div className="center">
        <div className="row">
          <button className="button">
            <img
              className="image"
              src={require("../../images/phone.svg").default}
              alt=""
            ></img>
          </button>
        </div>
      </div>

      <div className="center">
        <div className="row">
          <button className="button">
            <img
              className="image"
              src={require("../../images/home.svg").default}
              alt=""
            ></img>
          </button>
        </div>
      </div>

      <div className="center">
        <div className="row">
          <button className="button">
            <img
              className="image"
              src={require("../../images/shirt.svg").default}
              alt=""
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
