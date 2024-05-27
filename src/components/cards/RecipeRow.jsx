import axios from "axios";
// import { useEffect } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

/* eslint-disable react/prop-types */
export default function RecipeRow({ recipe, setRescipes, recipes }) {
  // const handleDelete = (id) => {
  //   axios.delete()
  // };

  const handleDelete = async (id) => {
    try {
      await swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios.delete(`http://localhost:3000/recipes/${id}`);
          console.log("Post deleted:", id);
          setRescipes(recipes.filter((r) => r.id !== id));
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
  return (
    <tr>
      <th>{recipe?.id}</th>
      <td>{recipe?.title}</td>
      <td>{recipe?.price}</td>
      <td>{recipe?.category}</td>
      <td className="flex gap-4">
        <Link
          to={`/dashboard/edit-recipe/${recipe?.id}`}
          className="btn btn-xs btn-neutral"
        >
          Edit
        </Link>
        <button
          onClick={() => handleDelete(recipe?.id)}
          className="btn btn-xs btn-error"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
