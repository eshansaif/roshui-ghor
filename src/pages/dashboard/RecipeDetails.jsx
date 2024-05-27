import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();

  const [recipeDetails, setRecipeDetails] = useState();

  console.log(recipeDetails);

  useEffect(() => {
    async function load() {
      const recipeData = await axios.get(`http://localhost:3000/recipes/${id}`);
      if (recipeData?.status === 200) {
        setRecipeDetails(recipeData?.data);
      }
    }

    load();
  }, [id]);
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={recipeDetails?.image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{recipeDetails?.title}</h2>
        <p>Category: {recipeDetails?.category}</p>
        <p>Price: {recipeDetails?.price} /-</p>
        <p>Description: {recipeDetails?.description}</p>
        <div className="card-actions justify-end">
          <Link to="/dashboard/manage-recipes">
            <button className="btn btn-primary">View All Recipes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
