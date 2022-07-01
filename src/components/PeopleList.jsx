import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../redux-reducers/allUsersSlice";
import { getAllUsers } from "../redux-reducers/allUsersSlice";
import { useAuth } from "../context/auth-context";
const PeopleList = () => {
  const { users } = useSelector(getAllUsers);

  const dispatch = useDispatch();
  const {
    auth: { token, user },
  } = useAuth();

  console.log("user in pl", users);
  const [peopleList, setPeopleList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await dispatch(fetchAllUsers());
        if (response.error) {
          throw new Error("Error in loading users");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [token]);
  useEffect(() => {
    setPeopleList(
      users
        .filter((listUser) => listUser.username !== user.username)
        .slice(0, 3)
    );
  }, [users, user]);

  return (
    <div>
      {peopleList.map((user) => {
        return (
          <div className="flex flex-col p-5 mx-2 ">
            <div className="flex mx-2 ">
              <img
                class="w-11 h-11 rounded-full"
                src={user.profileImg}
                alt="Rounded avatar"
              />
              <div className="pl-2">
                <h1 className="text-xl">{user.firstName}</h1>
                <span>@{user.username}</span>
              </div>
            </div>
            <button className=" w-48	bg-violet-300 p-2 mt-2 rounded-md mx-4	">
              Follow
            </button>
            <hr className="mt-2" />
          </div>
        );
      })}

      <hr />
    </div>
  );
};

export default PeopleList;
