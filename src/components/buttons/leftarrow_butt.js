import React from "react";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

function Leftarrow_butt() {
  const navigate = useNavigate();
  return (
    <motion.button
      onClick={() => navigate("/")}
      whileHover={{ scale: 1.2 }}
      className="ham_button"
    >
      <img
        className="img_ham"
        src={require("../../images/left-arrow.svg").default}
        alt=""
      ></img>
    </motion.button>
  );
}

export default Leftarrow_butt;
