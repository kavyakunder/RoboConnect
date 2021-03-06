import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";

const Sidebar = () => {
  const {
    auth: { user },
  } = useAuth();
  return (
    <div class="w-84 mt-10 mr-14   ">
      <ul class="relative ">
        <li class="relative ">
          <Link
            to="/home"
            class="mt-16 flex items-center text-lg p-12  h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-grey-900 hover:bg-gray-100 transition duration-300 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            Home
          </Link>
        </li>
        <li class="relative">
          <Link
            to="/explore"
            class="flex items-center text-lg p-12  h-12 overflow-hidden text-gray-700  whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            Explore
          </Link>
        </li>
        <li class="relative">
          <Link
            to="/bookmark"
            class="flex items-center text-lg p-12 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 "
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            Bookmarks
          </Link>
        </li>
        <li class="relative">
          <Link
            to={`/profile/${user.username}`}
            class="flex items-center text-lg p-12  h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 "
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
