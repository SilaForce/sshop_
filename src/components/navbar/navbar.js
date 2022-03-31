import React, { useState } from "react";
import { motion } from "framer-motion";
import Tippy from "@tippyjs/react";
import "../tippy";
import { useSpring, animated } from "react-spring";

const Navbar = () => {
  const styles = useSpring({
    from: { marginLeft: -500 },
    to: { marginLeft: 0 },
    config: { delay: 100 },
  });
  return (
    <animated.div className="navbar" style={styles}>
      <div className="center">
        <div className="row">
          <Tippy
            theme={"black"}
            placement="right"
            content={<div>Vehicles</div>}
          >
            <motion.button whileHover={{ scale: 1.3 }} className="button">
              <img
                className="image"
                src={require("../../images/car.svg").default}
                alt=""
              ></img>
            </motion.button>
          </Tippy>
        </div>
      </div>

      <div className="center">
        <div className="row">
          <Tippy
            theme={"black"}
            placement="right"
            content={<div>Technology</div>}
          >
            <motion.button whileHover={{ scale: 1.3 }} className="button">
              <img
                className="image"
                src={require("../../images/phone.svg").default}
                alt=""
              ></img>
            </motion.button>
          </Tippy>
        </div>
      </div>

      <div className="center">
        <div className="row">
          <Tippy theme={"black"} placement="right" content={<div>House</div>}>
            <motion.button whileHover={{ scale: 1.3 }} className="button">
              <img
                className="image"
                src={require("../../images/home.svg").default}
                alt=""
              ></img>
            </motion.button>
          </Tippy>
        </div>
      </div>

      <div className="center">
        <div className="row">
          <Tippy theme={"black"} placement="right" content={<div>Clothes</div>}>
            <motion.button whileHover={{ scale: 1.3 }} className="button">
              <img
                className="image"
                src={require("../../images/shirt.svg").default}
                alt=""
              ></img>
            </motion.button>
          </Tippy>
        </div>
      </div>
    </animated.div>
  );
};

export default Navbar;
