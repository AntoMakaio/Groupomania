import React from "react";
import { useSelector } from "react-redux";
import { dateParser } from "../Utils";
import UploadImg from "./UploadImg";

const UpdateProfil = () => {
  const userData = useSelector((state) => state.userReducer);

  return (
    <div className="profil-container">
      <h1>Profil de {userData.pseudo}</h1>
      <div className="update-container">
        <div className="profil-card">
          <br />
          <img src={userData.picture} alt="user-pic" />
          <br />
          <br />
          <UploadImg />
          <br />
          <h5>
            Inscrit sur le réseau depuis le : {dateParser(userData.createdAt)}
          </h5>
          <br />
        </div>
      </div>
    </div>
  );
};

export default UpdateProfil;
