import React, { useEffect, useState } from "react";
import Item from "../../components/item/item";
import { useLocation } from "react-router-dom";

function ItemScreen() {
  const location = useLocation();
  const props = location.state;
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
      <Item data={props} />;
    </div>
  );
}

export default ItemScreen;
