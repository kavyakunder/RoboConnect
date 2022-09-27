import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../redux-reducers/allUsersSlice";
import { getAllUsers } from "../redux-reducers/allUsersSlice";
import { useAuth } from "../context/auth-context";
import { followUser } from "../redux-reducers/allUsersSlice";
import { Link } from "react-router-dom";
const PeopleList = () => {
  const { users } = useSelector(getAllUsers);
  const dispatch = useDispatch();
  const {
    auth: { token, user },
  } = useAuth();
  const [suggestionsList, setSuggestionsList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await dispatch(fetchAllUsers());
        if (response.error) {
          throw new Error("Error in loading all users.");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [token]);
  const userData = users?.find((dbUser) => dbUser.username === user.username);

  useEffect(() => {
    setSuggestionsList(
      users
        ?.filter((listUser) => listUser.username !== userData?.username)
        ?.filter(
          (eachUser) =>
            !userData?.following.find(
              (item) => item.username === eachUser.username
            )
        )
    );
  }, [users, user]);

  return (
    <div>
      {suggestionsList.length > 0 ? (
        suggestionsList.map((user) => {
          return (
            <div className="flex flex-col p-5 mx-2 ">
              <div className="flex m-auto ">
                <img
                  class="w-11 h-11 rounded-full"
                  src={user.profileImg}
                  alt="Rounded avatar"
                />
                <Link to={`/profile/${user.username}`}>
                  <div className="pl-2 hover:text-violet-700 ">
                    <h1 className="text-xl ">{user.firstName}</h1>
                    <span>@{user.username}</span>
                  </div>
                </Link>
              </div>
              <button
                onClick={(e) => {
                  console.log("I have clicked");
                  e.stopPropagation();
                  dispatch(followUser({ token, followUserId: user._id }));
                }}
                className=" w-48	bg-violet-300 p-2 mt-2 rounded-md m-auto	"
              >
                Follow
              </button>
              <hr className="mt-2" />
            </div>
          );
        })
      ) : (
        <div className="flex flex-col p-5 mx-2 ">
          <h1 className="m-auto text-xl">Following all users!</h1>
        </div>
      )}

      <hr />
    </div>
  );
};

export default PeopleList;
