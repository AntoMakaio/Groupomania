import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Profil from "../../pages/Profil";
import Nav from "../Nav";
// import Error from "../Error";

const index = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
      {/* <Routes>
        <Route>
          <Error />
        </Route>
      </Routes> */}
    </BrowserRouter>
  );
};

export default index;
