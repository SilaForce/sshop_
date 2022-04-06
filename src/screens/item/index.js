import React, { useEffect, useState } from "react";
import Aheader from "../../components/header/admin_header/admin";
import Item from "../../components/item/item";

function ItemScreen() {
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
    <div>
      <Aheader />
      {items &&
        items.map((item) => {
          return <Item data={item} />;
        })}
    </div>
  );
}

export default ItemScreen;
