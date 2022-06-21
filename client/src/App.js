import React from "react";
import Routes from "./components/Routes";
import Log from "./components/Log";

const App = () => {
  return (
    //à passer sur la page profil.js
    <div className="profil-page">
      <div className="log-container">
        <Log />
        <div className="img-container">
          <img src="./img/log-profil.png" alt="Image page Profil" />
        </div>
      </div>
    </div>
  );
};
export default App;
