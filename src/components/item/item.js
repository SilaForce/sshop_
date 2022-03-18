import React, { useState, useEffect } from "react";

function Item({ data }) {
  return (
    <div className="item">
      <div className="icon"></div>
      <div className="details">
        {Object.keys(data).map((attr) => {
          return <div>{attr}</div>;
        })}
      </div>
      <div className="cell">
        {Object.values(data).map((attr) => {
          return <div>{attr}</div>;
        })}
      </div>
    </div>
  );
}

export default Item;
