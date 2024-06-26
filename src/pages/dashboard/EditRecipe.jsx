import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";

const EditRecipe = () => {
  const { id } = useParams();

  const [recipeDetails, setRecipeDetails] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
    async function load() {
      const categoriesData = await axios.get(
        "http://localhost:3000/categories"
      );
      if (categoriesData?.status === 200) {
        setCategories(categoriesData?.data);
      }

      const recipeData = await axios.get(`http://localhost:3000/recipes/${id}`);
      if (recipeData?.status === 200) {
        setRecipeDetails(recipeData?.data);
      }
    }

    load();
  }, [id]);

  const handleEditRecipe = async (e) => {
    e.preventDefault();

    const form = e.target;

    const title = form.title.value;
    const price = form.price.value;
    const image = form.image.value;
    const category = form.category.value;
    const description = form.description.value;
    const recipeData = {
      id,
      title,
      price,
      image,
      category,
      description,
    };

    await axios.patch(`http://localhost:3000/recipes/${id}`, recipeData);
    swal(
      "Recipe Edited!",
      `You have updated "${title}" successfully!`,
      "success"
    );
  };
  return (
    <div className="w-full px-16">
      <h1 className="text-4xl mb-4">Update Recipe</h1>
      <form onSubmit={handleEditRecipe} className="w-full">
        <div className="mb-4">
          <label htmlFor="">Title </label>
          <input
            defaultValue={recipeDetails?.title}
            type="text"
            name="title"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Price </label>
          <input
            type="number"
            name="price"
            defaultValue={recipeDetails?.price}
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Image </label>
          <input
            type="text"
            name="image"
            defaultValue={recipeDetails?.image}
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Cateogry </label>
          <select name="category" id="" className="w-full py-3 px-5 border">
            {categories?.map((category) => (
              <option
                key={category?.title}
                selected={category?.title === recipeDetails?.category}
                value={category?.title}
              >
                {category?.title}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="">Description </label>
          <textarea
            defaultValue={recipeDetails?.description}
            name="description"
            className="w-full py-3 px-5 border"
          />
        </div>

        <div className="mb-4">
          <input
            type="submit"
            value={"Update Recipe"}
            className="w-full btn py-3 px-5 border btn-neutral"
          />
        </div>
      </form>
    </div>
  );
};

export default EditRecipe;
