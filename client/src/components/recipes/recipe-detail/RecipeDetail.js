import React, { useState, useEffect } from "react";
import Style from "./RecipeDetail.module.css";
import path from "../../../assets/config/path";

const RecipeDetail = ({ match }) => {

  const {
    params: { id },
  } = match;

  const [recipeDetail, setRecipeDetail] = useState();

  useEffect(()=>{
    const fetchRecipeDetail = async ()=>{
      const data = await fetch(`${path}recipes/${id}`);
      const response = await data.json()
      setRecipeDetail(response)
    }
    fetchRecipeDetail()
  }, [])


  
  return <div>RecipeDetail</div>;
};

export default RecipeDetail;
