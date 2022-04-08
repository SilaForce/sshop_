import React from "react";
import { animated } from "react-spring";

import { useNavigate } from "react-router-dom";

const Anavbar = () => {
  const navigate = useNavigate();
  return (
    <animated.div className="nvbar">
      <div className="wrapper">
        <div className="avatar"></div>
        <div className="info">Profile Details</div>
        <div className="info" onClick={() => navigate("/myitems")}>
          My Items
        </div>
        <div className="info">Payment methods</div>
      </div>
    </animated.div>
  );
};
export default Anavbar;
