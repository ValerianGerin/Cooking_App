import React, { useState, useEffect } from "react";
import Style from "./RecipeDetail.module.css";
import path from "../../../assets/config/path";

const RecipeDetail = ({ match }) => {
  const {
    params: { id },
  } = match;

  const [recipeDetail, setRecipeDetail] = useState();

  useEffect(() => {
    const fetchRecipeDetail = async () => {
      const data = await fetch(`${path}recipes/${id}`);
      const response = await data.json();
      setRecipeDetail(response);
    };
    fetchRecipeDetail();
  }, []);

  return (
    <div className={Style.mainContainer}>
      <div className={Style.mainInfosRecipeContainer}>
        <div className={Style.recipeImg}>
          <img />
        </div>
        <div className={Style.recipeInfos}>
          <span>title</span>
          <span>description</span>
          <span>crée le</span>
        </div>
      </div>
      <div className={Style.recipeIngredients}>
        <div>Liste des ingredients</div>
      </div>
      <div className={Style.recipePreparation}>conseil de preparation</div>
    </div>
  );
};

export default RecipeDetail;
