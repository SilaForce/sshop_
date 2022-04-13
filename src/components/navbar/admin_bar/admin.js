import React, { useState } from "react";
import { animated } from "react-spring";

import Info from "../../info";
import MyItems from "../../myitems/index";

const Anavbar = () => {
  const [modul, setModul] = useState("");

  return (
    <>
      <animated.div className="nvbar">
        <div className="wrapper">
          <div className="avatar">
            <img src={require("../../../images/user.svg").default} />
          </div>
          <div className="user">Amar Silajdzic</div>
          <div className="info" onClick={() => setModul(<Info />)}>
            Profile Details
          </div>
          <div className="info" onClick={() => setModul(<MyItems />)}>
            My Items
          </div>
          <div className="info">Payment methods</div>
        </div>
      </animated.div>
      <div>{modul}</div>
    </>
  );
};
export default Anavbar;
