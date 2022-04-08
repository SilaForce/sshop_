import React from "react";

import { motion } from "framer-motion";

function Buy() {
  return (
   
      <motion.button whileHover={{ scale: 1.2 }} className="buy-button">
        <img
          className="buy-img"
          src={require("../../images/buy.svg").default}
        />
      </motion.button>
    
  );
}

export default Buy;
