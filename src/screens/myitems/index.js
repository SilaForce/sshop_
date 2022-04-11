import React, { useState, useEffect } from "react";
import Sitem from "../../components/item/sitem/sitem";

const MyItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/myitems")
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

export default MyItems;
