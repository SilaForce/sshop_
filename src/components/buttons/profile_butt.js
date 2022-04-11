import React from "react";

import { useNavigate } from "react-router-dom";

import Tippy from "@tippyjs/react";
import { motion } from "framer-motion";

function Profile_butt(props) {
  const navigate = useNavigate();
  return (
    <Tippy theme={"black"} content={<span>Profile</span>}>
      <motion.button
        onClick={() => navigate("/profile")}
        whileHover={{ scale: 1.2 }}
        className="prof_butt"
      >
        <img
          className="profile"
          src={require("../../images/profile.svg").default}
          alt=""
        ></img>
      </motion.button>
    </Tippy>
  );
}

export default Profile_butt;
