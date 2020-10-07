import React, { useState } from "react";
import Style from "./SearchBar.module.css";
import path from "../../../assets/config/path";

const SearchBar = () => {
  const [search, setSearch] = useState();

  const handleSeach = (e) => {
    const { value } = e.target;

    const fetchRecipes = async () => {
      try {
        const data = await fetch(`${path}search?recipes=${value}`);
        const response = await data.json();
        setSearch(response);
      } catch (error) {}
    };
    fetchRecipes();
  };

  const inputSearch = document.querySelector("input[name=searchBar]");

  return (
    <div className={Style.inputContainer}>
      <input name="searchBar" className={Style.input} onChange={handleSeach} placeholder="que recherchez vous?"/>
      {search && inputSearch.value !== "" && search.length > 0? (
        <div className={Style.searchContainer}>
          {search.map((recipe) => (
            <div className={Style.searchItemsContainer}>
              <img src={recipe.img} alt={recipe.title}/>
              <div>{recipe.title}</div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default SearchBar;
