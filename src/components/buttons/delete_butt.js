import React from "react";

import { motion } from "framer-motion";

function Delete_butt() {
  return (
    <div className="delete-wrapper">
      <motion.button whileHover={{ scale: 1.2 }} className="delete-button">
        <img
          className="delete-img"
          src={require("../../images/delete.svg").default}
        />
      </motion.button>
    </div>
  );
}

export default Delete_butt;
