import React, { Component } from "react";
import "./App.css";
import Form from "./Components/Form";
import Recipes from "./Components/Recipes";

class App extends Component {
  state = {
    recipes: [],
  };

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const APP_ID = "4e9f05eb";
    const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";
    const url = `https://api.edamam.com/search?q=${recipeName}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const api_call = await fetch(url);
    const data = await api_call.json();
    console.log(data);
    this.setState({ recipes: data.hits });
    console.log(this.state.recipes);
  };
  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes: recipes });
  };
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    console.log(this.state.recipes);

    localStorage.setItem("recipes", recipes);
  };

  render() {
    console.log("render" + this.state.recipes);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}></Form>
        <Recipes recipes={this.state.recipes}></Recipes>
      </div>
    );
  }
}

export default App;
