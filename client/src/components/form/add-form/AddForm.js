import React, { useState } from "react";
import Style from "./AddForm.module.css";

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

  return (
    <div className={Style.formMainContainer}>
      <form autoComplete="on" className={Style.form}>
        <div className={Style.formItems}>
          <label>Nom de la recette:</label>
          <input type="text" name="title" onChange={handleChange} />
        </div>

        {ingredient
          ? ingredient.map((input, index) => (
              <div className={Style.ingredientContainer}>
                <div className={Style.ingredientName}>
                  <label>Ingredients:</label>
                  <input
                    type="text"
                    name="name"
                    value={input.name}
                    onChange={(e) => handleIngredientInputChange(e, index)}
                  />
                </div>
                <div className={Style.ingredientQuantityContainer}>
                  <div>+</div>
                  <input
                    type="text"
                    name="quantite"
                    value={input.quantite}
                    onChange={(e) => handleIngredientInputChange(e, index)}
                  />
                  <div>-</div>
                </div>
                {ingredient.length !== 1 && (
                  <button onClick={() => handleRemoveClick(index)}>
                    Supprimer
                  </button>
                )}
                {ingredient.length - 1 === index && (
                  <button onClick={handleAddClick}>Ajouter</button>
                )}
              </div>
            ))
          : null}

        <div className={Style.formItems}>
          <label>Image</label>
          <input type="file" name="img" onChange={handleChange} />
        </div>

        <div className={Style.formItems}>
          <label>Description:</label>
          <textarea
            rows="5"
            cols="35"
            name="desciption"
            onChange={handleChange}
          ></textarea>
        </div>

        <div className={Style.formItems}>
          <label>Conseil de preparation:</label>
          <textarea
            rows="5"
            cols="35"
            name="preparation"
            onChange={handleChange}
          ></textarea>
        </div>

        <div className={Style.buttonContainer}>
          <button className={Style.button}>Valider</button>
          <button className={Style.button}>Reinitialiser</button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
