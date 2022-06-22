import React from "react";
import { useSelector } from "react-redux";
import UploadImg from "./UploadImg";

const UpdateProfil = () => {
  const userData = useSelector((state) => state.userReducer);

  return (
    <div className="profil-container">
      <h1>Profil de {userData.pseudo}</h1>
      <div className="update-container">
        <div className="profil-card">
          <h2>Photo de profil</h2>
          <img src={userData.picture} alt="user-pic" />
          <UploadImg />
        </div>
      </div>
    </div>
  );
};

export default UpdateProfil;
