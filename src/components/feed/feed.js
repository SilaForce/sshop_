import React, { useState, useEffect } from "react";
import Sitem from "../item/sitem/sitem";

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
        {items &&
          items.map((item) => {
            return <Sitem data={item} />;
          })}
      </div>
    </div>
  );
};

export default Feed;
