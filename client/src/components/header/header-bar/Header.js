import React from "react";
import Style from "./Header.module.css";

const Header = () => {
  return (
    <div className={Style.headerMainContainer}>
      <div>logo</div>
      <div>Recettes</div>
      <div>Categories</div>
      <input/>
    </div>
  );
};

export default Header;
