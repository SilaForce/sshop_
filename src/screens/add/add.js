import React from "react";
import Add_scre from "../../components/add_scre/add_scre";

import Header from "../../components/header/admin_header/admin";

function Add() {
  return (
    <div>
      <Header />
      <h1 className="addtxt">Add Item</h1>
      <Add_scre />
    </div>
  );
}

export default Add;
