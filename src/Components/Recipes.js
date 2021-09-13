import React from "react";
import "../Recipes.css";
import { Link } from "react-router-dom";
const Recipes = (props) => (
  <div className="recipe">
    {props.recipes.map((recipe) => {
      return (
        <div className="recipe_container" key={recipe.recipe.calories}>
          <div>
            <img
              className="img"
              src={recipe.recipe.image}
              alt={recipe.recipe.label}
            ></img>
            <p className="label">
              {recipe.recipe.label.length < 20
                ? `${recipe.recipe.label}`
                : `${recipe.recipe.label.substring(0, 25)}...`}
            </p>
            <p className="source">
              Source : <span>{recipe.recipe.source}</span>
            </p>
            <button className="recipe_button">
              <Link
                to={{
                  pathname: `/recipe/${recipe.recipe.calories}`,
                  state: { recipe: recipe.recipe.label },
                }}
              >
                {" "}
                View Recipe{" "}
              </Link>
            </button>
          </div>
        </div>
      );
    })}
  </div>
);

export default Recipes;
