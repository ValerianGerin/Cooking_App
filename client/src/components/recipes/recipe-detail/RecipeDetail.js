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

  console.log(recipeDetail);

  return (
    <>
      {recipeDetail ? (
        <div className={Style.mainContainer}>
          <div className={Style.mainInfosRecipeContainer}>
            <div className={Style.recipeImg}>
              <img />
            </div>
            <div className={Style.recipeInfos}>
              <span>{recipeDetail.title}</span>
              <span>{recipeDetail.description}</span>
            </div>
          </div>
          <div className={Style.recipeIngredients}>
           
              <ul>
                {recipeDetail.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    <div>{ingredient.name}</div>{" "}
                    <div>quantité: {ingredient.quantite}</div>
                  </li>
                ))}
              </ul>
           
          </div>
          <div className={Style.recipePreparation}>
          Conseils de preparation:
            <div>{recipeDetail.preparation}</div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default RecipeDetail;
