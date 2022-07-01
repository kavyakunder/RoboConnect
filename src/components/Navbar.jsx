import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";

const Navbar = () => {
  const { auth, setAuth } = useAuth();
  const redirect = useNavigate();

  const signoutAuth = (setAuth) => {
    localStorage.removeItem("AUTH_TOKEN");
    localStorage.removeItem("username");
    setAuth(() => ({
      isAuth: false,
      token: null,
      user: "",
    }));
    redirect("/");
  };

  return (
    <nav class="w-full fixed	flex  justify-between flex-wrap bg-violet-700 p-6">
      <span class="text-white mr-6 font-semibold text-4xl tracking-tight">
        RoboChat
      </span>

      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow"></div>
        <div>
          {auth.isAuth === true ? (
            <>
              <Link to="/" onClick={() => signoutAuth(setAuth)}>
                Logout{" "}
              </Link>
            </>
          ) : (
            <Link className="link-undecorated" to="/">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
