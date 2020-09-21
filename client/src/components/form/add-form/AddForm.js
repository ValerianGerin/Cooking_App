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

  const [form, setForm] = useState(initialFormState);
  const [inputIngredient, setIngredients] = useState(
    initialFormStateIngredient
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };



  return (
    <div className={Style.formMainContainer}>
      <form autoComplete="on" className={Style.form}>
        <div className={Style.formItems}>
          <label>Nom de la recette:</label>
          <input type="text" name="title" onChange={handleChange} />
        </div>

        {inputIngredient
          ? inputIngredient.map((input, index) => (
              <div className={Style.ingredientContainer}>
                <div className={Style.ingredientName}>
                  <label>Ingredients:</label>
                  <input
                    type="text"
                    name="name"
                    value={input.name}
                  />
                </div>
                <div className={Style.ingredientQuantityContainer}>
                  <div>+</div>
                  <input
                    type="text"
                    name="quantite"
                    value={input.quantite}
                  />
                  <div>-</div>
                </div>
              </div>
          ))
          : null}

        <div
          id="newIngredient"
          className={Style.addNewIngredientText}
        >
          <div>+</div>
          <div>Ajouter un ingredient</div>
        </div>

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
