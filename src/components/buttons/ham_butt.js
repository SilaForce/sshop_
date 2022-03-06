import React from "react";

import { motion } from "framer-motion";

function Ham_butt() {
  return (
    <motion.button whileHover={{ scale: 1.2 }} className="ham_button">
      <img
        className="img_ham"
        src={require("../../images/ham.svg").default}
        alt=""
      ></img>
    </motion.button>
  );
}

export default Ham_butt;
