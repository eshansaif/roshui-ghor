import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecepiCard from "../components/cards/RecepiCard";

const RecipesByCategory = () => {
  const { cat } = useParams();
  console.log(cat);
  const [recipesByCat, setRecipesByCat] = useState([]);

  console.log(recipesByCat);

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:3000/recipes");
        console.log(response);
        if (response.status === 200) {
          const filteredRecipes = response.data.filter(
            (recipe) => recipe.category === cat
          );
          setRecipesByCat(filteredRecipes);
        }
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    loadRecipes();
  }, [cat]);

  return (
    <div className="mx-16 mb-4">
      <h1 className="text-4xl my-20 text-center underline">
        Recipes in {cat} Category
      </h1>
      <div className="grid md:grid-cols-4 gap-6">
        {recipesByCat.map((recipe) => (
          <RecepiCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipesByCategory;
