import React from "react";


import { motion } from "framer-motion";

function Submit() {
  return (
    <motion.button whileHover={{ scale: 1.2 }} className="submit" >
      <img src={require("../../images/check.svg").default}></img>
    </motion.button>
  );
}

export default Submit;
