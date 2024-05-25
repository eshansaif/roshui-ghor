import axios from "axios";
import { useEffect, useState } from "react";
import RecepiCard from "../components/cards/RecepiCard";

export default function AllRecipes() {
  const [recipes, setRescipes] = useState();
  useEffect(() => {
    async function load() {
      const data = await axios.get("http://localhost:3000/recipes");
      if (data?.status === 200) {
        setRescipes(data?.data);
      }
    }
    load();
  }, []);
  return (
    <div className="mx-16 mb-4">
      <h1 className="text-4xl my-20 text-center">Our All Recipes </h1>
      <div className="grid md:grid-cols-5 gap-6">
        {recipes?.map((recipe) => (
          <RecepiCard key={recipe?.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
