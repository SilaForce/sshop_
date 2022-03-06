import React from "react";

import { useNavigate } from "react-router-dom";

import Tippy from "@tippyjs/react";
import { motion } from "framer-motion";

function Basket_butt() {
  const navigate = useNavigate();
  return (
    <Tippy theme={"black"} content={<span>Basket</span>}>
      <motion.button
        whileHover={{ scale: 1.2 }}
        className="prof_butt"
        onClick={() => navigate("/profile/basket")}
      >
        <img
          className="profile"
          src={require("../../images/cart.svg").default}
          alt=""
        ></img>
      </motion.button>
    </Tippy>
  );
}

export default Basket_butt;
