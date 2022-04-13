import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Profile from "./screens/profile/profile";
import Main from "./screens/main/main";
import Basket from "./screens/basket/basket";
import Add from "./screens/add/add";
import ItemScreen from "./screens/item/index";
import Header from "./components/header/header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
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
