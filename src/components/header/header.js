import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "../tippy";
import { useSpring, animated } from "react-spring";

const Header = () => {
  const styles = useSpring({
    from: { marginTop: -500 },
    to: [{ marginTop: 0 }],
    config: { delay: 100 },
  });

  const navigate = useNavigate();
  return (
    <div>
      <animated.div className="header" style={styles}>
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
            <motion.button
              onClick={() => navigate("/profile")}
              whileHover={{ scale: 1.2 }}
              className="prof_butt"
            >
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
      </animated.div>
    </div>
  );
};

export default Header;
