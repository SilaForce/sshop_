import React from "react";

function Search() {
  return (
    <div className="center">
      <input type="input" placeholder="Search" className="search"></input>
      <button className="search_butt">
        <img src={require("../../images/search.svg").default} alt=""></img>
      </button>
    </div>
  );
}

export default Search;
