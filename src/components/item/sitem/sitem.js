import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Sitem({ data }) {
  const navigate = useNavigate();
  return (
    <div
      className="item"
      onClick={() => {
        navigate("/item", { state: data });
      }}
    >
      <div className="icon"></div>
      <div className="details">
        <ul className="no-bullets">
          <li>Name</li>
          <li>Price</li>
          <li>Condition</li>
        </ul>
      </div>
      <div className="cell">
        <div>{data.name}</div>
        <div>{data.price}</div>
        <div>{data.condition}</div>
      </div>
    </div>
  );
}

export default Sitem;
