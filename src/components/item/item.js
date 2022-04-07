import React, { useEffect, useState } from "react";

function Item({ data }) {
  return (
    <div className="item-wrapper">
      <div className="item-frame">
        <div className="name">{data.name}</div>
        <div className="item-flex">
          <div className="output-frame">
            <div className="output">{data.price}</div>
            <div className="output">{data.condition}</div>
          </div>
          <div className="output-frame">
            <div className="output">{data.category}</div>
            <div className="output">{data.location}</div>
          </div>
          <div className="item-image">IMAGE</div>
          <div className="desc">{data.description}</div>
        </div>
      </div>
    </div>
  );
}

export default Item;
