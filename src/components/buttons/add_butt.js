import React from "react";

import Tippy from "@tippyjs/react";

import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

function Add_btn(props) {
  const navigate = useNavigate();
  return (
    <div className="right">
      <Tippy theme={"black"} content={<span>Add Item</span>}>
        <motion.button
          whileHover={{ scale: 1.2 }}
          className="add"
          onClick={() => navigate("/add")}
        >
          <img
            className="imgadd"
            src={require("../../images/add-folder.svg").default}
          ></img>
        </motion.button>
      </Tippy>
    </div>
  );
}

export default Add_btn;
