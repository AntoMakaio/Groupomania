import React from "react";
import axios from "axios";
import cookie from "js-cookie";

const Logout = () => {
  const remmoveCookie = (key) => {
    if (window !== "undefined") {
      cookie.remove(key, { expires: 1 });
    }
  };

  const logout = async () => {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/user/logout`,
      withCredentials: true,
    })
      .then(() => remmoveCookie("jwt"))
      .catch((err) => console.log(err));

    window.location = "/";
  };
  return (
    <li onClick={logout}>
      <h4 className="logout">Logout</h4>
    </li>
  );
};

export default Logout;
