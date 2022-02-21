import React from "react";
import { motion } from "framer-motion";
import Tippy from "@tippyjs/react";
import "../tippy";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="center">
        <div className="row">
          <Tippy
            interactive={"true"}
            theme={"black"}
            placement="right"
            content={
              <ul className="no-bullets">
                <li>Cars</li>
                <li>Trucks</li>
                <li>Bikes</li>
              </ul>
            }
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
            interactive={"true"}
            theme={"black"}
            placement="right"
            content={
              <ul className="no-bullets">
                <li>Phones</li>
                <li>TV</li>
                <li>Computers</li>
                <li>Consols</li>
              </ul>
            }
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
          <Tippy
            interactive={"true"}
            theme={"black"}
            placement="right"
            content={
              <ul className="no-bullets">
                <li>Houses</li>
                <li>Furniter</li>
                <li>Land</li>
              </ul>
            }
          >
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
          <Tippy
            interactive={"true"}
            theme={"black"}
            placement="right"
            content={
              <ul className="no-bullets">
                <li>Pants</li>
                <li>Shirts</li>
                <li>Shoes</li>
              </ul>
            }
          >
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
    </div>
  );
};

export default Navbar;
