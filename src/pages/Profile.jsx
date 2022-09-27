import React from "react";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import PostFeedCard from "../components/PostFeedCard";
import ProfileDetails from "../components/ProfileDetails";
import PeopleList from "../components/PeopleList";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserProfile } from "../redux-reducers/userProfileSlice";
import { getUserProfile } from "../redux-reducers/userProfileSlice";
import { getAllUsers } from "../redux-reducers/allUsersSlice";
import { fetchUserPosts } from "../redux-reducers/userProfileSlice";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { userPosts } = useSelector(getUserProfile);
  const { users } = useSelector(getAllUsers);

  const { username } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const response = await dispatch(
          fetchUserProfile({ username: username })
        );
        console.log("response", response);
        if (response.error) {
          throw new Error("Error in loading user profile");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [users, username]);

  useEffect(() => {
    (async () => {
      try {
        const response = await dispatch(fetchUserPosts({ username: username }));
        if (response.error) {
          throw new Error("Error in loading user posts");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [userPosts]);

  console.log("user post", userPosts);

  return (
    <>
      <div className="flex justify-between w-screen h-screen px-4 text-gray-700">
        <Sidebar />
        <div className="flex flex-col flex-grow border-l border-r border-gray-300">
          <div className="flex-grow h-0 overflow-auto mt-20">
            <h1 className="text-3xl text-center mt-8 ">
              {/* Profile */}
              <hr />
            </h1>
            <ProfileDetails />
            {userPosts.map((post) => (
              <PostFeedCard key={post._id} post={post} />
            ))}
          </div>
        </div>
        <div className="flex flex-col flex-shrink-0 w-1/4 py-4 pl-4 ">
          <h3 className="mt-24 font-semibold text-2xl text-center 	">
            People you can follow
          </h3>
          <PeopleList />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
