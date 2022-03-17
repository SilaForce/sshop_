import React, { useState, useEffect } from "react";
import Item from "../item/item";

const Feed = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItems(data);
      });
  }, []);

  return (
    <div className="cf">
      <div className="feed">
        <div className="align">
          {items &&
            items.map((item, value) => {
              return <Item data={item} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
