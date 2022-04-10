import React from "react";
import Buy from "../buttons/buy_butt";

function Item({ data }) {
  return (
    <div className="item-wrapper">
      <div className="item-frame">
        <div className="name">{data.name}</div>
        <div className="item-flex">
          <div className="output-frame">
            <div className="output">Price:{data.price}</div>
            <div className="output">Condition:{data.condition}</div>
            <div className="output">Empty</div>
          </div>
          <div className="output-frame">
            <div className="output">Category:{data.category}</div>
            <div className="output">Location:{data.location}</div>
            <div className="output">Contact:{data.contact}</div>
          </div>
          <div className="item-image">IMAGE</div>
          <div className="desc">{data.description}</div>
        </div>
        <Buy />
      </div>
    </div>
  );
}

export default Item;
