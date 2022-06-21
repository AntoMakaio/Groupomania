import React from "react";
import Routes from "./components/Routes";
import Log from "./components/Log";

const App = () => {
  return (
    //à passer sur  page/profil.js
    <div className="profil-page">
      <div className="log-container">
        <Log signin={false} signup={true} />
        <div className="img-container">
          <img src="./img/log-profil.png" alt="Image page Profil" />
        </div>
      </div>
    </div>
    // <div>
    //   <Routes />
    // </div>
  );
};
export default App;
