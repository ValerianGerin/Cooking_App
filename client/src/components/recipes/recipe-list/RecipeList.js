import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import path from "../../../assets/config/path";
import Style from "./RecipeList.module.css";

const RecipeList = () => {
  const [recipeList, setRecipeList] = useState();

  useEffect(() => {
    const fetchRecipeList = async () => {
      const recipes = await fetch(`${path}recipes`);
      const response = await recipes.json();
      setRecipeList(response);
    };
    fetchRecipeList();
  }, []);

  const deleteRecipe = (id) =>{
    fetch(`${path}recipes/delete/${id}`, {method:"delete"})
  }

  console.log(recipeList)
 

  return (
    <div className={Style.recipesMainContainer}>
      {recipeList && recipeList.length > 0
        ? recipeList.map((recipe, index) => (
            <div key={index} className={Style.recipeContainer}>
              <div className={Style.recipeInfos}>
                <div>
                  <img src={recipe.img} alt={recipe.title}/>
                </div>
                <div className={Style.recipeText}>
                  <p>{recipe.title}</p>
                  <p>{recipe.description}</p>
                 
                </div>
              </div>
              <div className={Style.buttonContainer}>
                <button onClick={()=>deleteRecipe(recipe._id)} className={Style.button}>Supprimer</button>
                <button className={Style.button}>Modifier</button>
              </div>
            </div>
        ))
        : <div className={Style.norecipe}>Pas de recettes, ajouter en au moins une pour consulter la liste</div>}
    </div>
  );
};

export default RecipeList;
