import React from "react";
import Sidebar from "../components/Sidebar";
import PeopleList from "../components/PeopleList";
import PostFeedCard from "../components/PostFeedCard";
import { useEffect } from "react";
// import { fetchBookmarks } from "../redux-reducers/postsSlice";
import { fetchLiked } from "../redux-reducers/postsSlice";
import { getPost } from "../redux-reducers/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../context/auth-context";

const Liked = () => {
  const {
    auth: { token },
  } = useAuth();
  const dispatch = useDispatch();

  const { posts, liked } = useSelector(getPost);

  useEffect(() => {
    (async () => {
      try {
        const response = await dispatch(fetchLiked(token));
        if (response.error) {
          throw new Error("Error Liked");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [token]);

  const likedPosts = posts.filter((post) => liked.includes(post._id));

  return (
    <>
      <div className="flex justify-between w-screen h-screen px-4 text-gray-700">
        <Sidebar />
        <div className="flex flex-col flex-grow border-l border-r border-gray-300">
          <div className="flex-grow h-0 overflow-auto mt-20">
            <h1 className="text-3xl text-center mt-8 ">Liked posts</h1>
            {likedPosts.length > 0 ? (
              likedPosts.map((post) => (
                <PostFeedCard key={post._id} post={post} />
              ))
            ) : (
              <h1 className="text-3xl mt-10 text-center">
                No post has been liked yet!
              </h1>
            )}
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

export default Liked;
