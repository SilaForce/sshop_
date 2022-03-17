import React, { useState, useEffect } from "react";

function Item({ data }) {
  return (
    <div className="item">
      <div className="details">
        {Object.keys(data).map((attr) => {
          return <div>{attr}</div>;
        })}
      </div>
      <div>
        <div className="cell">
          <div>
            {Object.values(data).map((attr) => {
              return <div>{attr}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
