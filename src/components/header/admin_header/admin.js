import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../tippy";
import Tippy from "@tippyjs/react";
import { useSpring, animated } from "react-spring";

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
        <motion.button
          onClick={() => navigate("/")}
          whileHover={{ scale: 1.2 }}
          className="ham_button"
        >
          <img
            className="img_ham"
            src={require("../../../images/left-arrow.svg").default}
            alt=""
          ></img>
        </motion.button>

        <img
          className="logo"
          src={require("../../../images/SSlogo.png")}
          alt=""
        ></img>

        <Tippy theme={"black"} content={<span>Basket</span>}>
          <motion.button whileHover={{ scale: 1.2 }} className="prof_butt">
            <img
              className="profile"
              src={require("../../../images/cart.svg").default}
              alt=""
            ></img>
          </motion.button>
        </Tippy>
      </div>
    </animated.div>
  );
};

export default Aheader;
