import React from "react";
import imageCompany from "../img/logobitA.png";
import "../scss/Header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="img-company">
        <img src={imageCompany} alt="" />
      </div>

      <div className="menu-box">
        <div className="menu-icon"></div>
        <div className="menu-icon"></div>
        <div className="menu-icon"></div>
      </div>
    </div>
  );
};

export default Header;
