import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getPost,
  addBookmark,
  deleteBookmark,
  likePost,
  dislikePost,
} from "../redux-reducers/postsSlice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const PostFeedCard = ({ post }) => {
  const {
    auth: { token, user },
  } = useAuth();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { bookmarks } = useSelector(getPost);

  const {
    _id,
    content,
    firstName,
    username,
    profileImg,
    postImg,
    comments,
    likes: { likeCount, likedBy },
  } = post;

  const goToUserProfile = (username) => {
    navigate(`/profile/${username}`);
  };
  const isBookmarked = () => {
    return bookmarks.find((postId) => postId === _id) ? true : false;
  };

  const isLiked = () => {
    return likedBy.find(
      (postUsername) => postUsername.username === user.username
    )
      ? true
      : false;
  };

  const bookmarkHandler = async (e) => {
    e.preventDefault();
    try {
      const response = isBookmarked()
        ? await dispatch(deleteBookmark({ token, postId: _id }))
        : await dispatch(addBookmark({ token, postId: _id }));
      if (response.error) {
        throw new Error(response.payload);
      }
      console.log("Bookmarked your post!");
    } catch (error) {
      console.log(error);
    }
  };

  const likeHandler = async (e) => {
    e.preventDefault();
    try {
      const response = isLiked()
        ? await dispatch(dislikePost({ token, postId: _id }))
        : await dispatch(likePost({ token, postId: _id }));
      if (response.error) {
        throw new Error(response.payload);
      }
      console.log("Liked your post!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Link to={`/post/${_id}`}>
        <div className="flex w-10/12	px-16 py-12  border rounded-lg shadow-xl m-auto mt-8">
          <img
            className="w-14 h-14 rounded-full"
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
              {/* <span className="ml-auto text-lg">Just now</span> */}
            </div>
            <p className="mt-1 text-xl">{content}</p>
            <img className="m-auto pt-3" src={postImg} alt="" width={"800px"} />
            <div className="flex mt-5">
              <button onClick={likeHandler} className="text-2xl font-semibold">
                {isLiked() ? (
                  <FavoriteIcon sx={{ color: "#6d28d9" }} fontSize="large" />
                ) : (
                  <FavoriteBorderIcon
                    sx={{ color: "#6d28d9" }}
                    fontSize="large"
                  />
                )}
                <span className="text-2xl ml-1 font-thin">{likeCount}</span>
              </button>
              <button className="ml-16 text-2xl font-semibold">
                <ChatBubbleOutlineIcon
                  sx={{ color: "#6d28d9" }}
                  fontSize="large"
                />
                <span className="text-2xl ml-1 font-thin">
                  {" "}
                  {comments.length > 0 ? comments.length : 0}
                </span>
              </button>
              <button
                onClick={bookmarkHandler}
                className="ml-16 text-2xl font-semibold "
              >
                {isBookmarked() ? (
                  <BookmarkIcon sx={{ color: "#6d28d9" }} fontSize="large" />
                ) : (
                  <BookmarkBorderIcon
                    sx={{ color: "#6d28d9" }}
                    fontSize="large"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PostFeedCard;
