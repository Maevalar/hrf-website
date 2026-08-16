import axios from "axios";
import { RecipeCard } from "../../organisms/RecipeCard/RecipeCard";
import "./RecipesPage.scss";
import type { Recipe } from "../../../types/Recipe";

const response = await axios.get(
  "https://themealdb.com/api/json/v1/1/lookup.php?i=52907",
);

export const RecipesPage: React.FC = () => {
    const recipe: Recipe = response.data.meals[0];
    console.log(recipe)
  return (
    <section className="recipesPage">
      <div className="recipesPage__recipes">
        <RecipeCard recipe={recipe} />
        <RecipeCard recipe={recipe} />
        <RecipeCard recipe={recipe} />
        <RecipeCard recipe={recipe} />
        <RecipeCard recipe={recipe} />
      </div>
    </section>
  );
};
