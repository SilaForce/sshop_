import React from "react";

import Header from "../../components/header/header";
import Navbar from "../../components/navbar/navbar";
import Row from "../../components/row/row";

const Main = () => {
  const [visible, setVisible] = React.useState(true);
  return (
    <div>
      <Header />
      {visible && <Navbar />}
    </div>
  );
};

export default Main;
