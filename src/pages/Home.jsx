import { useEffect, useState } from "react";
import Banner from "../components/home/Banner";
import RecepiCard from "../components/cards/RecepiCard";
import CategoryCard from "../components/cards/CategoryCard";

export default function Home() {
  const [recipes, setRescipes] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function load() {
      // Get recipes
      const recipeRes = await fetch("http://localhost:3000/recipes");
      const recipeData = await recipeRes.json();
      setRescipes(recipeData);

      // Get categories
      const categoryRes = await fetch("http://localhost:3000/categories");
      const categoryData = await categoryRes.json();
      setCategories(categoryData);
    }
    load();
  }, []);

  // Function to shuffle an array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <div>
      <Banner />

      <div className="mx-16">
        <h1 className="text-4xl my-20 text-center">Our Recipe Categories</h1>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {categories?.map((category) => (
            <CategoryCard key={category?.id} category={category} />
          ))}
        </div>
      </div>

      <div className="mx-16">
        <h1 className="text-4xl my-20 text-center">Popular Recipes</h1>
        <div className="grid md:grid-cols-4 gap-6 mb-4">
          {shuffleArray([...recipes])
            ?.slice(0, 4)
            ?.map((recipe) => (
              <RecepiCard key={recipe?.id} recipe={recipe} />
            ))}
        </div>
      </div>

      <div className="mx-16">
        <h1 className="text-4xl my-20 text-center">Our Newest Recipes</h1>
        <div className="grid md:grid-cols-4 gap-6 mb-4">
          {recipes
            ?.slice()
            ?.reverse()
            ?.slice(0, 4)
            ?.map((recipe) => (
              <RecepiCard key={recipe?.id} recipe={recipe} />
            ))}
        </div>
      </div>
    </div>
  );
}
