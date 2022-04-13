import React from "react";

import { motion } from "framer-motion";

function UpdateButton() {
  return (
    <div>
      <motion.button whileHover={{ scale: 1.1 }} className="update-button">
        <img
          className="update-img"
          src={require("../../images/update.svg").default}
        ></img>
      </motion.button>
    </div>
  );
}

export default UpdateButton;
