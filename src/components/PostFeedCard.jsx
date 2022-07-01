import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";

const PostFeedCard = ({ post }) => {
  const {
    auth: { token, user },
  } = useAuth();
  const { _id, content, firstName, username, profileImg } = post;

  return (
    <>
      <Link to="/">
        <div className="flex w-10/12	p-16 border rounded-lg	 border-gray-300 m-auto mt-5">
          <img
            class="w-14 h-14 rounded-full"
            src={profileImg}
            alt="Rounded avatar"
          />
          <div className="flex flex-col flex-grow ml-4">
            <div className="flex">
              <span className="font-semibold text-lg">{firstName}</span>
              <span className="ml-1 text-lg">@{username}</span>
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
      </Link>
    </>
  );
};

export default PostFeedCard;
