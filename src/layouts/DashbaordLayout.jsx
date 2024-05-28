import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase.config";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function DashbaordLayout() {
  const [signOut] = useSignOut(auth);

  const handleLogout = async () => {
    await signOut();
  };
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <div className=" mb-4">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-60 min-h-screen bg-base-200 text-base-content flex flex-col justify-between">
          {/* Sidebar content here */}
          <div>
            <li>
              <Link
                className="text-xl hidden md:block text-[#4a00ff] font-extrabold"
                to="/"
              >
                Roshui Ghor
              </Link>
            </li>
            <li>
              {/* <Link to={"/dashboard/manage-recipes"}>Mangae All Recipes</Link> */}

              <NavLink to="/dashboard/manage-recipes">
                {({ isActive }) => (
                  <span
                    className={
                      isActive
                        ? "text-blue-500 font-semibold underline"
                        : "font-bold"
                    }
                  >
                    Manage All Recipes
                  </span>
                )}
              </NavLink>
            </li>
            <li>
              {/* <Link to={"/dashboard/add-recipe"}>Add Recipe</Link> */}
              <NavLink to="/dashboard/add-recipe">
                {({ isActive }) => (
                  <span
                    className={
                      isActive
                        ? "text-blue-500 font-semibold underline"
                        : "font-bold"
                    }
                  >
                    Add Recipe
                  </span>
                )}
              </NavLink>
            </li>
          </div>
          <div className="flex gap-4">
            <Link to={"/"} className="btn btn-neutral">
              Home
            </Link>
            <button className="btn btn-error" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}
