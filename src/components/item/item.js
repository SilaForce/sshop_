import React, { useState, useEffect } from "react";

function Item({ data }) {
  return (
    <div className="item">
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

export default Item;
