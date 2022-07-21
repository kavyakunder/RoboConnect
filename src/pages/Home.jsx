import React from "react";
import { useEffect } from "react";
import { fetchPosts } from "../redux-reducers/postsSlice";
import PeopleList from "../components/PeopleList";
import Sidebar from "../components/Sidebar";
import FeedPosts from "../components/FeedPosts";
import NewPost from "../components/NewPost";
import { useAuth } from "../context/auth-context";
import { useDispatch, useSelector } from "react-redux";
import PostFeedCard from "../components/PostFeedCard";
import { getAllUsers } from "../redux-reducers/allUsersSlice";
import { getPost } from "../redux-reducers/postsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector(getPost);
  console.log("post", posts);
  const {
    auth: { user },
  } = useAuth();

  const { users } = useSelector(getAllUsers);
  console.log("users", users);

  useEffect(() => {
    // dispatch(getPost());
    // dispatch(getAllUsers());
    dispatch(fetchPosts());
    // dispatch(getAllUsers());
  }, [dispatch]);

  const loggedInUser = users.find(
    (dbUser) => dbUser.username === user.username
  );

  const followingUsers = loggedInUser?.following;

  const postsOfFollowing = posts?.filter(
    (post) =>
      followingUsers?.some(
        (followingUser) => followingUser.username === post.username
      ) || user.username === post.username
  );

  return (
    <>
      <div className="flex justify-between w-screen h-screen px-4 text-gray-700">
        <Sidebar />
        <div className="flex flex-col flex-grow border-l border-r border-gray-300">
          <div className="flex-grow h-0 overflow-auto mt-20">
            <NewPost />
            {/* <FeedPosts /> */}
            {postsOfFollowing.map((post) => {
              return <PostFeedCard key={post._id} post={post} />;
            })}
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

export default Home;
