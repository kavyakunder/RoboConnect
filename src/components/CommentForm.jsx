import React from "react";
import { useState, useEffect } from "react";
import { useAuth } from "../context/auth-context";
import { commentOnPost } from "../redux-reducers/postsSlice";
import { useDispatch } from "react-redux";

const CommentForm = ({ post }) => {
  const {
    auth: { token, user },
  } = useAuth();
  const dispatch = useDispatch();

  const [comment, setComment] = useState("");

  const [commentList, setCommentList] = useState(post.comments);

  useEffect(() => {
    setCommentList([...post.comments]);
  }, [post.comments]);

  const addCommentHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(
        commentOnPost({
          token,
          postId: post._id,
          commentData: { text: comment },
        })
      );
      if (response.error) {
        throw new Error("Couldn't modify comments");
      }
    } catch (error) {
      console.log("error", "Couldn't modify comments");
    }
    setComment("");
  };

  return (
    <>
      <div className="px-5 pt-5 mx-20 mt-8 border border-slate-300 rounded-lg">
        <form>
          <div className="flex items-center py-2 px-3 bg-gray-50 rounded-lg dark:bg-gray-700">
            <img
              class="w-10 h-10 rounded-full ml-5"
              src={user.profileImg}
              alt="Rounded avatar"
            />

            <textarea
              id="chat"
              rows="1"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-violet-500 focus:border-violet-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
              placeholder="Your message..."
            ></textarea>
            <button
              onClick={addCommentHandler}
              type="submit"
              className="inline-flex justify-center p-2 text-violet-600 rounded-full cursor-pointer hover:bg-violet-100 dark:text-violet-500 dark:hover:bg-gray-600"
            >
              <svg
                className="w-6 h-6 rotate-90"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
              </svg>
            </button>
          </div>
        </form>
        {commentList.map((commentItem) => (
          <div className="flex my-7 border border-slate-200 p-8	">
            <img
              class="w-10 h-10 rounded-full"
              src={
                commentItem.username === user.username
                  ? user.profileImg
                  : commentItem.profileImg
              }
              alt="Rounded avatar"
            />
            <div className="ml-3">
              <h1 className="text-lg font-medium">@{commentItem.username}</h1>
              <h1 className="text-lg">{commentItem.text}</h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CommentForm;
