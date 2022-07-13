import React from "react";
import PostFeedCard from "./PostFeedCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPost, fetchPosts } from "../redux-reducers/postsSlice";
import { useAuth } from "../context/auth-context";
const FeedPosts = () => {
  const {
    auth: { user },
  } = useAuth();

  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const response = await dispatch(fetchPosts());
        if (response.error) {
          throw new Error("Error in fetching posts.");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [user, dispatch]);

  const { posts } = useSelector(getPost);
  return (
    <div>
      {posts.map((post) => {
        return <PostFeedCard key={post._id} post={post} />;
      })}
    </div>
  );
};

export default FeedPosts;
