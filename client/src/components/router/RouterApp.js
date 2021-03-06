import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  Homepage,
  RecipeList,
  RecipeDetail,
  AddForm,
  UpdateForm,
} from "../index";

const RouterApp = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/recipes" component={RecipeList}></Route>
        <Route exact path="/recipes/new" component={AddForm}></Route>
        <Route exact path="/recipes/:id" component={RecipeDetail}></Route>
        <Route exact path="/update/:id" component={UpdateForm}></Route>
      </Switch>
    </>
  );
};

export default RouterApp;
