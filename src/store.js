import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./redux-reducers/postsSlice";
import { allUsersReducer } from "./redux-reducers/allUsersSlice";
import { userProfileReducer } from "./redux-reducers/userProfileSlice";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    allUsers: allUsersReducer,
    userProfile: userProfileReducer,
  },
});

export default store;
