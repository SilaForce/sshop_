import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../tippy";
import Tippy from "@tippyjs/react";
import { useSpring, animated } from "react-spring";
import Leftarrow_butt from "../../buttons/leftarrow_butt";
import Basket_butt from "../../buttons/basket_butt";

const Aheader = () => {
  const navigate = useNavigate();
  const styles = useSpring({
    from: { marginTop: -500 },
    to: [{ marginTop: 0 }],
    config: { delay: 100 },
  });
  return (
    <animated.div className="header" style={styles}>
      <div className="center">
        <Leftarrow_butt />

        <img
          className="logo"
          src={require("../../../images/SSlogo.png")}
          alt=""
        ></img>
        <div className="right">
          <Basket_butt />
        </div>
      </div>
    </animated.div>
  );
};

export default Aheader;
