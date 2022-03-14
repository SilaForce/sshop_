import React from "react";
import Item from "../item/item";

const Feed = () => {
  return (
    <div className="cf">
      <div className="feed">
        <div className="align">
          <Item />
          <Item />
          <Item />
        </div>
        <div className="align">
          <Item />
          <Item />
          <Item />
        </div>
        <div className="align">
          <Item />
          <Item />
          <Item />
        </div>
        <div className="align">
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  );
};

export default Feed;
