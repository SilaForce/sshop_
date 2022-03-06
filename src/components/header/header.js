import React from "react";

import { useSpring, animated } from "react-spring";
import Profile_butt from "../buttons/profile_butt";
import Ham_butt from "../buttons/ham_butt";

const Header = () => {
  const styles = useSpring({
    from: { marginTop: -500 },
    to: [{ marginTop: 0 }],
    config: { delay: 100 },
  });

  return (
    <div>
      <animated.div className="header" style={styles}>
        <div className="center">
          <Ham_butt />

          <img
            className="logo"
            src={require("../../images/SSlogo.png")}
            alt=""
          ></img>

          <Profile_butt />
        </div>
        <div className="center">
          <input type="input" placeholder="Search" className="search"></input>

          <button className="search_butt">
            <img src={require("../../images/search.svg").default} alt=""></img>
          </button>
        </div>
      </animated.div>
    </div>
  );
};

export default Header;
