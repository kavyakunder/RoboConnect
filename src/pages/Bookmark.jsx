import React from "react";
import Sidebar from "../components/Sidebar";
import PeopleList from "../components/PeopleList";
import FeedPosts from "../components/FeedPosts";
import PostFeedCard from "../components/PostFeedCard";
import { useEffect } from "react";
import { fetchBookmarks } from "../redux-reducers/postsSlice";
import { getPost } from "../redux-reducers/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../context/auth-context";

const Bookmark = () => {
  const {
    auth: { token },
  } = useAuth();
  const dispatch = useDispatch();

  const { posts, bookmarks } = useSelector(getPost);

  useEffect(() => {
    (async () => {
      try {
        const response = await dispatch(fetchBookmarks(token));
        if (response.error) {
          throw new Error("Error bookmarks");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [token]);

  const bookmarkPosts = posts.filter((post) => bookmarks.includes(post._id));

  return (
    <>
      <div className="flex justify-between w-screen h-screen px-4 text-gray-700">
        <Sidebar />
        <div className="flex flex-col flex-grow border-l border-r border-gray-300">
          <div className="flex-grow h-0 overflow-auto mt-20">
            <h1 className="text-3xl text-center mt-8 ">
              View bookmarked posts
            </h1>
            {bookmarkPosts.length > 0 ? (
              bookmarkPosts.map((post) => (
                <PostFeedCard key={post._id} post={post} />
              ))
            ) : (
              <h1 className="text-3xl mt-10 text-center">
                No post has been bookmarked yet!
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

export default Bookmark;
