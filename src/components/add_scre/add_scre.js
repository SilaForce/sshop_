import React, { useState } from "react";
import Submit from "../buttons/submit-butt";
import Input from "../input/input";
import { motion } from "framer-motion";

function Add_scre() {
  return (
      <div className="frame">
        <div className="inframe">
          <Input />
        </div>
        <motion.div whileHover={{ scale: 1.2 }} className="img_input">
          <img
            className="img_img"
            src={require("../../images/add-image.svg").default}
          />
        </motion.div>
      </div>

  );
}

export default Add_scre;
