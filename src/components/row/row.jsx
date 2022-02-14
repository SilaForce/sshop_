import React from "react";
import Feed from "../feed/feed";
import Navbar from "../navbar/navbar";

const Row = () => {
  return (
    <div className="rowc">
      <Navbar />
      <Feed />
    </div>
  );
};

export default Row;
