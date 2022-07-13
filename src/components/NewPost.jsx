import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { useAuth } from "../context/auth-context";
import { addPost } from "../redux-reducers/postsSlice";

const NewPost = () => {
  const dispatch = useDispatch();
  const {
    auth: { token, user },
  } = useAuth();

  const [addContent, setAddContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const addPostHandler = async (e) => {
    e.preventDefault();
    const { firstName, lastName, profileImg } = user;
    const postData = {
      firstName,
      lastName,
      profileImg,
      content: addContent,
      postImg: selectedImage,
    };
    console.log("profileimg", profileImg);

    try {
      const response = await dispatch(addPost({ token, postData }));
      if (response.error) {
        console.log("respone.payload", response.payload);
        throw new Error(response.payload);
      }
      console.log("succes");
    } catch (error) {
      console.log(error.message);
    }
    setAddContent("");
    setSelectedImage(null);
  };

  const imgFile = (e) => {
    setSelectedImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <form>
      <div className="flex w-full p-8 border-b-4 border-gray-300 mt-6">
        <img
          class="w-14 h-14 rounded-full"
          src={user.profileImg}
          alt="avatar"
        />{" "}
        <div className="flex flex-col flex-grow ml-4">
          <textarea
            className="p-3 bg-transparent border border-slate-400 rounded-sm focus:outline-none focus:ring focus:ring-slate-300"
            name=""
            id=""
            rows="3"
            placeholder="What's happening?"
            value={addContent}
            onChange={(e) => setAddContent(e.target.value)}
          ></textarea>
          {selectedImage && (
            <>
              <img
                width={"350px"}
                src={selectedImage}
                alt="image"
                className="mt-3"
              />
            </>
          )}
          <div className="flex justify-between mt-2">
            <label className="cursor-pointer">
              <i class="fa-duotone fa-image text-2xl"></i>
              <input
                id="add-image"
                type="file"
                accept="image/*"
                onChange={imgFile}
                className=" bg-white hidden"
              ></input>
            </label>
            <button
              onClick={addPostHandler}
              className="flex items-center h-8 px-10 py-5 text-xl rounded-sm bg-violet-500 hover:bg-gray-400 text-violet-50"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default NewPost;
