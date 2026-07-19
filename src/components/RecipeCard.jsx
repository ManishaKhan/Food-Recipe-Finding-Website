
import React from "react";
import { Link } from "react-router-dom";
import "./RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card w-full h-full">
      <Link to={`/recipe/${recipe.idMeal}`} className="recipe-link">

        <div className="image-wrapper">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="recipe-image"
          />

          {/* <span className="category-badge">
            {recipe.strCategory}
          </span> */}
         
        </div>

        <div className="recipe-content">
          
          <button className="view-btn">
            View Recipe →
          </button>
          
          <h3 className="recipe-title">
            {recipe.strMeal}
          </h3>

          <p className="recipe-area">
            🌍 {recipe.strArea}
          </p>

          {/* <button className="view-btn">
            View Recipe →
          </button> */}
        </div>

      </Link>
    </div>
  );
};

export default RecipeCard;
