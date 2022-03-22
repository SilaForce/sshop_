import React, { useState } from "react";

import { motion } from "framer-motion";

class Input extends React.Component {
  state = {
    name: "",
    price: "",
    location: "",
    condition: "",
    category: "",
    description: "",
  };

  add = (e) => {
    e.preventDefault();

    if (
      this.state.name === "" ||
      this.state.price === "" ||
      this.state.location === "" ||
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
      condition: "",
      category: "",
      description: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.add}>
        <div>
          <input
            type="text"
            className="input"
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          ></input>
          <input
            type="text"
            className="input"
            placeholder="Price"
            name="price"
            value={this.state.price}
            onChange={(e) => this.setState({ price: e.target.value })}
          ></input>
          ;
          <input
            type="text"
            className="input"
            placeholder="Location"
            name="location"
            value={this.state.location}
            onChange={(e) => this.setState({ location: e.target.value })}
          ></input>
          <input
            type="text"
            className="input"
            placeholder="Condition"
            name="condition"
            value={this.state.condition}
            onChange={(e) => this.setState({ condition: e.target.value })}
          ></input>
          <input
            type="text"
            className="input"
            placeholder="Category"
            name="category"
            value={this.state.category}
            onChange={(e) => this.setState({ category: e.target.value })}
          ></input>
          <input
            type="text"
            className="input"
            placeholder="Description"
            name="description"
            value={this.state.description}
            onChange={(e) => this.setState({ description: e.target.value })}
          ></input>
          <motion.button whileHover={{ scale: 1.2 }} className="submit">
            <img src={require("../../images/check.svg").default}></img>
          </motion.button>
        </div>
      </form>
    );
  }
}

export default Input;
