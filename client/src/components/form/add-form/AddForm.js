import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Style from "./AddForm.module.css";
import path from "../../../assets/config/path";

const AddForm = () => {
  const initialFormState = {
    title: "",
    img: "",
    desciption: "",
    preparation: "",
  };
  const initialFormStateIngredient = [{ name: "", quantite: "" }];

  //State for every input except ingredients
  const [form, setForm] = useState(initialFormState);

  //State for Ingredients
  const [ingredient, setIngredients] = useState(initialFormStateIngredient);

  //Initial statement for redirection after the submit
  const isRedirect = false;

  //Recover every field except ingredients
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  //Recover fields for ingredients
  const handleIngredientInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...ingredient];
    list[index][name] = value;
    setIngredients(list);
  };

  //Remove ingredient from the array
  const handleRemoveClick = (index) => {
    const list = [...ingredient];
    list.splice(index, 1);
    setIngredients(list);
  };

  //Add ingredient in array
  const handleAddClick = () => {
    setIngredients([...ingredient, { name: "", quantite: "" }]);
  };

  //Melting states to send the data corresponding to the mongoose schema
  const handleSubmit = (e) => {
    const recipeData = { ...form, ingredients: [...ingredient] };

    try {
      fetch(`${path}recipes/new`, {
        method: "POST",
        body: JSON.stringify(recipeData),
        headers: { "Content-type": "application/json" },
      });
   

    } catch (error) {
      if (error) {
        e.preventDefault();
      }
    }
  };

  return (
    <div className={Style.formMainContainer}>
      <form autoComplete="on" className={Style.form} onSubmit={handleSubmit}>
        <div className={Style.formItems}>
          <label>Nom de la recette:</label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            className={Style.input}
          />
        </div>

        {ingredient
          ? ingredient.map((input, index) => (
              <div div key={index} className={Style.ingredientContainer}>
                <div>
                  <div className={Style.ingredientName}>
                    <label>Ingredients:</label>
                    <input
                      type="text"
                      name="name"
                      onChange={(e) => handleIngredientInputChange(e, index)}
                      className={Style.input}
                    />
                  </div>

                  <div className={Style.ingredientQuantityContainer}>
                    <label>Quantité:</label>
                    <input
                      type="number"
                      name="quantite"
                      value={input.quantite}
                      onChange={(e) => handleIngredientInputChange(e, index)}
                      className={Style.input}
                    />
                  </div>

                  {ingredient.length !== 1 && (
                    <button
                      onClick={() => handleRemoveClick(index)}
                      className={Style.buttonIngredient}
                    >
                      Supprimer
                    </button>
                  )}
                </div>
                <div>
                  {ingredient.length - 1 === index && (
                    <button
                      onClick={handleAddClick}
                      className={Style.buttonIngredient}
                    >
                      Ajouter
                    </button>
                  )}
                </div>
              </div>
            ))
          : null}

        <div className={Style.formItems}>
          <label>Image:</label>
          <input type="file" name="img" onChange={handleChange} />
        </div>

        <div className={Style.formItems}>
          <label>Description:</label>
          <textarea
            rows="5"
            cols="35"
            name="desciption"
            onChange={handleChange}
            className={Style.textarea}
          ></textarea>
        </div>

        <div className={Style.formItems}>
          <label>Conseil de preparation:</label>
          <textarea
            rows="5"
            cols="35"
            name="preparation"
            onChange={handleChange}
            className={Style.textarea}
          ></textarea>
        </div>

        <div className={Style.buttonContainer}>
          <button className={Style.buttonForm}>Valider</button>
          <button className={Style.buttonForm}>Reinitialiser</button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
