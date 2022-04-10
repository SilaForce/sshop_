import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

class Input extends React.Component {
  state = {
    name: "",
    price: "",
    location: "",
    contact: "",
    condition: "",
    category: "",
    description: "",
  };

  add = (e) => {
    const axios = require("axios");
    e.preventDefault();

    if (
      this.state.name === "" ||
      this.state.price === "" ||
      this.state.location === "" ||
      this.state.contact === "" ||
      this.state.description === "" ||
      this.state.category === "" ||
      this.state.condition === ""
    ) {
      alert("Empty field!!!");
      return;
    }

    this.setState({
      name: "",
      price: "",
      location: "",
      contact: "",
      condition: "",
      category: "",
      description: "",
    });
    console.log(this.state);

    axios
      .post("http://localhost:5000/items", {
        name: this.state.name,
        price: this.state.price,
        location: this.state.location,
        condition: this.state.condition,
        category: this.state.category,
        description: this.state.description,
      })
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <form autocomplete="off" onSubmit={this.add}>
        <div>
          <div className="input-wrapper">
            <input
              placeholder="Name"
              type="text"
              className="input"
              name="name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            ></input>

            <input
              placeholder="Price"
              type="text"
              className="input"
              name="price"
              value={this.state.price}
              onChange={(e) => this.setState({ price: e.target.value })}
            ></input>
            <input
              placeholder="Location"
              type="text"
              className="input"
              name="location"
              value={this.state.location}
              onChange={(e) => this.setState({ location: e.target.value })}
            ></input>

            <input
              placeholder="Contact info"
              type="text"
              className="input"
              name="contact"
              value={this.state.contact}
              onChange={(e) => this.setState({ contact: e.target.value })}
            ></input>

            <select
              type="text"
              className="input"
              name="condition"
              value={this.state.condition}
              onChange={(e) => this.setState({ condition: e.target.value })}
            >
              <option className="option">Condition</option>
              <option className="option" value="New">
                New
              </option>
              <option className="option" value="Used">
                Used
              </option>
            </select>

            <select
              type="text"
              className="input"
              name="category"
              value={this.state.category}
              onChange={(e) => this.setState({ category: e.target.value })}
            >
              <option className="option">Category</option>
              <option className="option" value="Technology">
                Technology
              </option>
              <option className="option" value="Cars">
                Cars
              </option>
              <option className="option" value="Clothes">
                Clothes
              </option>
              <option className="option" value="House">
                House
              </option>
            </select>

            <input
              placeholder="Description"
              type="text"
              className="input"
              name="description"
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
            ></input>
          </div>
          <motion.button whileHover={{ scale: 1.2 }} className="submit">
            <img src={require("../../images/check.svg").default}></img>
          </motion.button>
        </div>
      </form>
    );
  }
}

export default Input;
