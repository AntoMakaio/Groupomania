import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Profil from "../../pages/Profil";
import Nav from "../Nav";

const index = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
