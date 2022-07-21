import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserProfile } from "../redux-reducers/userProfileSlice";
import { followUser } from "../redux-reducers/allUsersSlice";
import { useDispatch } from "react-redux";
import { useAuth } from "../context/auth-context";
import { getPost } from "../redux-reducers/postsSlice";
const ProfileDetails = () => {
  const { userProfile } = useSelector(getUserProfile);
  const dispatch = useDispatch();
  const { username } = useParams();
  const {
    auth: { token, user },
  } = useAuth();
  const { posts } = useSelector(getPost);
  const { firstName, lastName, bio, profileImg, following, followers } =
    userProfile;
  const currentUserPosts = posts?.filter((post) => post.username === username);

  console.log("user profile img", user.profileImg);
  return (
    <div>
      <div className="relative max-w-md mx-auto md:max-w-2xl  min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-28">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full flex justify-center">
              <div className="relative">
                <img
                  src={profileImg ? profileImg : user.profileImg}
                  alt={profileImg || user.profileImg}
                  className="shadow-xl rounded-full align-middle border-none  -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                />
              </div>
            </div>
            <div className="w-full text-center mt-20">
              <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    {currentUserPosts.length}
                  </span>
                  <span className="text-sm text-slate-400">Posts</span>
                </div>
                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    {followers?.length || user.followers.length}
                  </span>
                  <span className="text-sm text-slate-400">Followers</span>
                </div>

                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    {following?.length || user.followers.length}
                  </span>
                  <span className="text-sm text-slate-400">Following</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-2">
            <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
              {firstName} {lastName}
            </h3>
          </div>
          <div className="mt-6 py-6 border-t border-slate-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4">
                <p className="font-light leading-relaxed text-slate-600 mb-4">
                  {bio || user.bio}
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(followUser({ token, followUserId: user._id }));
                  }}
                  className="font-normal text-white hover:text-violet-900 bg-violet-400 p-3 border rounded-lg"
                >
                  Follow Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
