import React from "react";
import Sidebar from "../components/Sidebar";
import PeopleList from "../components/PeopleList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPost } from "../redux-reducers/postsSlice";
import { fetchSinglePostService } from "../services/postService";
import PostFeedCard from "../components/PostFeedCard";

const SinglePost = () => {
  const [viewPost, setViewPost] = useState("");
  const { postId } = useParams();
  const { posts } = useSelector(getPost);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { post },
        } = await fetchSinglePostService(postId);
        setViewPost(post);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [posts, postId]);

  return (
    <>
      <div className="flex justify-between w-screen h-screen px-4 text-gray-700">
        <Sidebar />
        <div className="flex flex-col flex-grow border-l border-r border-gray-300">
          <div className="flex-grow h-0 overflow-auto mt-20">
            <h1 className="text-3xl text-center mt-8 ">
              View posts
              <hr />
            </h1>
            {viewPost && <PostFeedCard post={viewPost} />}
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

export default SinglePost;
