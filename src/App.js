import React from "react";
import Profile from "./screens/profile/profile";
import Main from "./screens/main/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Basket from "./screens/basket/basket";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>

        <Route path="/profile" element={<Profile />}></Route>

        <Route path="/profile/basket" element={<Basket />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
