import React from "react";
import Profile from "./screens/profile/profile";
import Main from "./screens/main/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Basket from "./screens/basket/basket";
import Add from "./screens/add/add";
import ItemScreen from "./screens/item/index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>

        <Route path="/profile" element={<Profile />}></Route>

        <Route path="/profile/basket" element={<Basket />}></Route>

        <Route path="/add" element={<Add />}></Route>

        <Route path="/item" element={<ItemScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
