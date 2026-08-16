import { Earth, Utensils } from "lucide-react";
import type { Recipe } from "../../../types/Recipe";
import { MainButton } from "../../atoms/buttons/MainButton/MainButton";
import "./RecipeCard.scss";

type RecipeCardProps = {
  recipe: Recipe;
  className?: string;
};

const getIngredients = (recipe: Recipe) => {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const name = recipe[`strIngredient${i}` as keyof Recipe];
    const measure = recipe[`strMeasure${i}` as keyof Recipe];

    if (name && name !== "") {
      ingredients.push({ name, measure: measure || '' });
    }
  }

  return ingredients;
};

export const RecipeCard: React.FC<RecipeCardProps> = ({
  className = "",
  recipe,
}) => {
  const ingredients = getIngredients(recipe);
    console.log(ingredients)
  return (
    <div className={`recipeCard-block ${className}`}>
      <img
        src={recipe.strMealThumb}
        alt=""
        className="recipeCard-block__image"
      />
      <div className="recipeCard-block__body">
        <h3 className="recipeCard-block__name title">{recipe.strMeal}</h3>
        <div className="recipeCard-block__items">
          <div className="recipeCard-block__item recipe-item">
            <div className="recipe-item__area">
              <Earth color="#395852" />
              <p className="recipe-item__area__name text">{recipe.strArea}</p>
            </div>
            <div className="recipe-item__category">
              <Utensils color="#395852" />
              <p className="recipe-item__category__name text">
                {recipe.strCategory}
              </p>
            </div>
          </div>
        </div>
      </div>
      <MainButton className="recipeCard-block__button" text="View Recipe" />
    </div>
  );
};
