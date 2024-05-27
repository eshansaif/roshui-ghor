import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  // console.log(user);

  const handleLogout = async () => {
    await signOut();
  };
  return (
    <div className="navbar bg-gray-300 sticky top-0 px-16 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">
                {({ isActive }) => (
                  <span
                    className={
                      isActive ? "text-blue-500 font-semibold underline" : ""
                    }
                  >
                    Home
                  </span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/all-recipes">
                {({ isActive }) => (
                  <span
                    className={
                      isActive ? "text-blue-500 font-semibold underline" : ""
                    }
                  >
                    All Recipes
                  </span>
                )}
              </NavLink>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="text-xl hidden md:block text-[#4a00ff] font-extrabold"
        >
          Roshui Ghor
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-6 px-1">
          <li>
            <NavLink to="/">
              {({ isActive }) => (
                <span
                  className={
                    isActive ? "text-blue-500 font-semibold underline" : ""
                  }
                >
                  Home
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/all-recipes">
              {({ isActive }) => (
                <span
                  className={
                    isActive ? "text-blue-500 font-semibold underline" : ""
                  }
                >
                  All Recipes
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              {({ isActive }) => (
                <span
                  className={
                    isActive ? "text-blue-500 font-semibold underline" : ""
                  }
                >
                  About
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              {({ isActive }) => (
                <span
                  className={
                    isActive ? "text-blue-500 font-semibold underline" : ""
                  }
                >
                  Contact Us
                </span>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
      {!user?.email ? (
        <div className="navbar-end flex gap-4">
          <Link to={"/login"} className="btn btn-success">
            Login
          </Link>
          <Link to={"/register"} className="btn btn-secondary">
            Registration
          </Link>
        </div>
      ) : (
        <div className="navbar-end flex gap-4">
          <div>
            <Link to={"/dashboard"} className="btn btn-info">
              Dashboard
            </Link>
          </div>

          <div
            className="avatar placeholder tooltip tooltip-bottom tooltip-primary"
            data-tip={user?.displayName}
          >
            <div className="bg-neutral text-neutral-content rounded-full w-8 ">
              <img src={user?.photoURL} alt="" />
            </div>
          </div>
          <div>
            <button className="btn btn-warning" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
