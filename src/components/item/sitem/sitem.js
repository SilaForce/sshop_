import React, { useState, useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import { motion } from "framer-motion";

function Sitem({ data }) {
  const [items, setItems] = useState([]);

  const location = useLocation();
  const [url, setUrl] = useState(location.pathname);
  useEffect(() => {
    if (location.pathname !== url) setUrl(location.pathname);
    console.log("Url se promijenio");
  }, [location]);

  function DeleteItem(id) {
    fetch(`http://localhost:4000/myitems/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        FetchMyItem();
      });
    });
  }

  function FetchMyItem() {
    window.location.reload();
  }

  const navigate = useNavigate();

  return (
    <div className="item">
      <div
        className="icon"
        onClick={() => {
          navigate("/item", { state: data });
        }}
      ></div>
      <div
        className="name"
        onClick={() => {
          navigate("/item", { state: data });
        }}
      >
        {data.name}
      </div>
      <div
        className="price"
        onClick={() => {
          navigate("/item", { state: data });
        }}
      >
        {data.price}$
      </div>
      {url == "/myitems" && (
        <div className="delete-wrapper">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="delete-button"
            onClick={() => DeleteItem(data.id)}
          >
            <img
              className="delete-img"
              src={require("../../../images/delete.svg").default}
            />
          </motion.button>
        </div>
      )}
    </div>
  );
}

export default Sitem;
