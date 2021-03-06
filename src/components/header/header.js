import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

import Profile_butt from "../buttons/profile_butt";
import Leftarrow_butt from "../buttons/leftarrow_butt";
import Add_btn from "../buttons/add_butt";
import Search from "../search/search";
import Navbar from "../navbar/navbar";

import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [url, setUrl] = useState(location.pathname);
  useEffect(() => {
    if (location.pathname !== url) setUrl(location.pathname);
    console.log("Url se promijenio");
  }, [location]);

  const styles = useSpring({
    from: { marginTop: -500 },
    to: [{ marginTop: 0 }],
    config: { delay: 100 },
  });

  return (
    <div>
      <animated.div className="header" style={styles}>
        <div className="center">
          {url == "/" && (
            <div className="left">
              <Navbar />
            </div>
          )}
          {url == "/profile" && <Leftarrow_butt />}
          {url == "/profile/basket" && <Leftarrow_butt />}
          {url == "/add" && <Leftarrow_butt />}
          {url == "/item" && <Leftarrow_butt />}
          {url == "/myitems" && <Leftarrow_butt />}
          <img
            className="logo"
            src={require("../../images/SSlogo.png")}
            alt=""
          ></img>
          {url == "/" && <Profile_butt />}
          {url == "/profile" && <Add_btn />}
          {url == "/item" && <div className="right"></div>}
          {url == "/profile/basket" && <div className="right"></div>}
          {url == "/add" && <div className="right"></div>}
          {url == "/myitems" && <Add_btn />}
        </div>
        {url == "/" && <Search />}
      </animated.div>
    </div>
  );
};

export default Header;
