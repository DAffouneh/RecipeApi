import React from "react";
import App from "../App";
import ViewRecipe from "./ViewRecipe";
import { BrowserRouter, Route, Switch } from "react-router-dom";
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App}></Route>
      <Route path="/recipe/:id" component={ViewRecipe}></Route>
    </Switch>
  </BrowserRouter>
);
export default Router;
