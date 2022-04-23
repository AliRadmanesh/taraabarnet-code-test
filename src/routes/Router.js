import { Route, Routes } from "react-router-dom";

import Home from "../features/home";
import About from "../features/about";
import CardInfo from "../features/card-info";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cards/:id" element={<CardInfo />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Router;
