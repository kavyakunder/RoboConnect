import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { useNavigate } from "react-router-dom";
const PostFeedCard = ({ post }) => {
  const {
    auth: { token, user },
  } = useAuth();
  const navigate = useNavigate();

  const { _id, content, firstName, username, profileImg } = post;

  const goToUserProfile = (username) => {
    navigate(`/profile/${username}`);
  };

  return (
    <>
      <div className="flex w-10/12	p-16 border rounded-lg shadow-xl m-auto mt-5">
        <img
          class="w-14 h-14 rounded-full"
          src={profileImg}
          alt="Rounded avatar"
        />
        <div className="flex flex-col flex-grow ml-4">
          <div className="flex">
            <div
              className="cursor-pointer hover:text-violet-800"
              onClick={(e) => {
                e.preventDefault();
                goToUserProfile(username);
              }}
            >
              <span className="font-semibold text-lg">{firstName}</span>
              <span className="ml-1 text-lg">@{username}</span>
            </div>
            <span className="ml-auto text-lg">Just now</span>
          </div>
          <p className="mt-1 text-xl">{content}</p>
          <div className="flex mt-5">
            <button className="text-2xl font-semibold">
              <i class="fa-regular fa-heart text-violet-700"></i>
            </button>
            <button className="ml-16 text-2xl font-semibold">
              <i class="fa-regular fa-comment text-violet-700"></i>
            </button>
            <button className="ml-16 text-2xl font-semibold ">
              <i class="fa-regular fa-bookmark text-violet-700"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostFeedCard;
