import React from "react";

import { motion } from "framer-motion";

function Delete_butt(data) {
  function DeleteItem(id) {
    alert(id);
  }
  return (
    <div className="button-wrapper">
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="delete-button"
        onClick={() => DeleteItem(data.id)}
      >
        <img
          className="delete-img"
          src={require("../../images/delete.svg").default}
        />
      </motion.button>
    </div>
  );
}

export default Delete_butt;
