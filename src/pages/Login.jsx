import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { loginAuth } from "../services/loginService";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { auth, setAuth } = useAuth();

  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");
  console.log(loginError);
  console.log(auth);
  const testLogin = {
    username: "notsoadarsh",
    password: "adarshbalika",
    profileImg:
      "https://images.unsplash.com/photo-1644982647708-0b2cc3d910b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  };

  const loginSubmitHandler = async (user) => {
    try {
      const { encodedToken, foundUser } = await loginAuth(user);

      if (encodedToken) {
        localStorage.setItem("AUTH_TOKEN", JSON.stringify(encodedToken));
        localStorage.setItem("user", JSON.stringify(foundUser));

        setAuth(() => ({
          isAuth: true,
          token: encodedToken,
          user: foundUser,
        }));

        navigate("/home");
        console.log("succ");
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      setLoginError("This is error msg", error.message);
    }
  };
  const testLoginHandler = async (user) => {
    setUser(testLogin);
    loginSubmitHandler(user);
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-900">
        <div className="flex justify-center h-screen">
          <div
            className="hidden bg-cover lg:block lg:w-2/3"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
            }}
          >
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <h2 className="text-4xl font-bold text-white">Brand</h2>

                <p className="max-w-xl mt-3 text-gray-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                  autem ipsa, nulla laboriosam dolores, repellendus perferendis
                  libero suscipit nam temporibus molestiae
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">
                  RoboConnect
                </h2>

                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  A Social Media App for Robotic Enthusiasts
                </p>
              </div>

              <div className="mt-8">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    loginSubmitHandler(user);
                  }}
                >
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      value={user.username}
                      onChange={(e) =>
                        setUser({ ...user, username: e.target.value })
                      }
                      placeholder="Your Username"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-violet-400 dark:focus:border-violet-400 focus:ring-violet-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <label
                        for="password"
                        className="text-sm text-gray-600 dark:text-gray-200"
                      >
                        Password
                      </label>
                      <span className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">
                        Forgot password?
                      </span>
                    </div>

                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={user.password}
                      onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                      }
                      placeholder="Your Password"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-violet-400 dark:focus:border-violet-400 focus:ring-violet-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-violet-500 rounded-md hover:bg-violet-400 focus:outline-none focus:bg-violet-400 focus:ring focus:ring-violet-300 focus:ring-opacity-50"
                    >
                      Login
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        testLoginHandler(testLogin);
                      }}
                      className="mt-6	w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-violet-500 rounded-md hover:bg-violet-400 focus:outline-none focus:bg-violet-400 focus:ring focus:ring-violet-300 focus:ring-opacity-50"
                    >
                      Login with test credientials
                    </button>
                  </div>
                </form>

                <p className="mt-6 text-sm text-center text-gray-400">
                  Don&#x27;t have an account yet?{" "}
                  <span className="text-blue-500 focus:outline-none focus:underline hover:underline">
                    Sign up
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
