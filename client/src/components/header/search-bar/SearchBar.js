import React, { useState } from "react";
import Style from "./SearchBar.module.css";
import path from "../../../assets/config/path";

const SearchBar = () => {
  const [search, setSearch] = useState();

  const handleSeach = (e) => {
    const { value } = e.target;

    const fetchRecipes = async () => {
      try {
        const fetching = await fetch(`${path}search?recipes=${value}`);
        const response = await fetching.json();
        setSearch(response);
      } catch (error) {}
    };
    fetchRecipes();
  };

  return <input className={Style.input} onChange={handleSeach} />;
};

export default SearchBar;
