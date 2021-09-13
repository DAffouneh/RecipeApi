import React from "react";
import "../Recipes.css";
import { Link } from "react-router-dom";
class ViewRecipe extends React.Component {
  state = {
    RecipeActive: [],
  };

  componentDidMount = async () => {
    const label = this.props.location.state.recipe;
    const APP_ID = "4e9f05eb";
    const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";
    const url = `https://api.edamam.com/search?q=${label}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const req = await fetch(url);
    const res = await req.json();
    this.setState({ RecipeActive: res.hits[0].recipe });
    console.log(this.state.RecipeActive);
  };

  render() {
    const recipe = this.state.RecipeActive;
    //console.log(recipe);
    return (
      <div className="view">
        {this.state.RecipeActive.length !== 0 && (
          <div style={{ position: "absolute" }} className="recipe_container">
            <img className="img" src={recipe.image}></img>
            <p className="label">
              {recipe.label.length < 20
                ? `${recipe.label}`
                : `${recipe.label.substring(0, 25)}...`}
            </p>
            <p>
              Source: <span>{recipe.source}</span>
            </p>
            <p>
              Source Website:
              <span>
                <a href={recipe.url}>
                  {" "}
                  {recipe.url.length < 50
                    ? `${recipe.url}`
                    : `${recipe.url.substring(0, 30)}...`}
                </a>
              </span>
            </p>
            <button className="recipe_button">
              <Link to="/"> Home </Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default ViewRecipe;
