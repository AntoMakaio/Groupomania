import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UidContext } from "./AppContext";
import Logout from "./Log/Logout";

const Nav = () => {
  const uid = useContext(UidContext);
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <NavLink exact to="/">
            <div className="logo">
              <img src="./img/logo-groupomania.png" alt="Logo Groupomania" />
            </div>
          </NavLink>
        </div>
        {uid ? (
          <ul>
            <li></li>
            <li className="nav-welcome">
              <NavLink exact to="/profil">
                <h4>Bienvenue chez les fous</h4>
              </NavLink>
            </li>
            <Logout />
          </ul>
        ) : (
          <ul>
            <li></li>
            <li>
              <NavLink exact to="/profil">
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
