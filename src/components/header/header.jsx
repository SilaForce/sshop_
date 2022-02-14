import React, { Component } from "react";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="center">
          <button className="ham_button">
            <img
              className="img_ham"
              src={require("../../images/ham.svg").default}
              alt=""
            ></img>
          </button>

          <img
            className="logo"
            src={require("../../images/SSlogo.png")}
            alt=""
          ></img>

          <button className="prof_butt">
            <img
              className="profile"
              src={require("../../images/profile.svg").default}
              alt=""
            ></img>
          </button>
        </div>

        <div className="center">
          <input type="input" placeholder="Search" className="search"></input>

          <button className="search_butt">
            <img src={require("../../images/search.svg").default} alt=""></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
