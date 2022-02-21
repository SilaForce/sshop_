import React, { Component } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "../tippy";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="center">
          <motion.button whileHover={{ scale: 1.2 }} className="ham_button">
            <img
              className="img_ham"
              src={require("../../images/ham.svg").default}
              alt=""
            ></img>
          </motion.button>

          <img
            className="logo"
            src={require("../../images/SSlogo.png")}
            alt=""
          ></img>
          <Tippy theme={"black"} content={<span>Profile</span>}>
            <motion.button whileHover={{ scale: 1.2 }} className="prof_butt">
              <img
                className="profile"
                src={require("../../images/profile.svg").default}
                alt=""
              ></img>
            </motion.button>
          </Tippy>
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
