import React from "react";
import { Link} from "react-router-dom";
import Style from "./Header.module.css";
import Logo from "../../../assets/img/logo.png"
import SearchBar from "../search-bar/SearchBar";

const Header = () => {
  return (
    <div className={Style.headerMainContainer}>
      <Link to="/" >
        <img className={Style.logo} src={Logo}/>
      </Link>
      <Link to="/recipes" className={Style.headerNavItem}>Recettes</Link>
      <Link to="/category" className={Style.headerNavItem}>Categories</Link>
      <Link to="/recipes/new" className={Style.headerNavItem}>Ajouter une recette</Link>
      <SearchBar/>
      <div className={Style.separationHeader}></div>
 
    </div>
  );
};

export default Header;
