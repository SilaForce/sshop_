import React, { useState, useEffect } from "react";

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
    const axios = require("axios");
    e.preventDefault();

    this.setState({
      name: "",
      price: "",
      location: "",
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
          <select
            type="text"
            className="input"
            placeholder="Condition"
            name="condition"
            value={this.state.condition}
            onChange={(e) => this.setState({ condition: e.target.value })}
          >
        
            <option className="option">Condition</option>
            <option className="option" value="new">
              New
            </option>
            <option className="option" value="used">
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
            <option className="option" value="technology">
              Technology
            </option>
            <option className="option" value="cars">
              Cars
            </option>
            <option className="option" value="clothes">
              Clothes
            </option>
            <option className="option" value="house">
              House
            </option>
          </select>
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
