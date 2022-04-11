import React from "react";

import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

function Submit() {
  const navigate = useNavigate();
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      className="submit"
      onClick={() => navigate("/")}
    >
      <img src={require("../../images/check.svg").default}></img>
    </motion.button>
  );
}

export default Submit;
