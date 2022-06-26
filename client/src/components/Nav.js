import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UidContext } from "./AppContext";
import Logout from "./Log/Logout";

const Nav = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <NavLink to="/">
            <div className="logo">
              <img src="./img/logo-groupomania.png" alt="Logo Groupomania" />
            </div>
          </NavLink>
        </div>
        {uid ? (
          <ul className="ul-navbar">
            <li></li>
            <li className="nav-welcome">
              <h4>Bienvenue sur notre réseau {userData.pseudo} !</h4>
            </li>
            <NavLink to="/">
              <li className="li-navbar">
                <h4>Accueil</h4>
              </li>
            </NavLink>
            <NavLink to="/profil">
              <li className="li-navbar">
                <h4>Profil</h4>
              </li>
            </NavLink>
            <Logout />
          </ul>
        ) : (
          <ul>
            <li></li>
            <li>
              <NavLink to="/profil">
                <h4>Login</h4>
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
