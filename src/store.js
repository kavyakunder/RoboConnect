import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./redux-reducers/postsSlice";
import { allUsersReducer } from "./redux-reducers/allUsersSlice";
const store = configureStore({
  reducer: {
    posts: postsReducer,
    allUsers: allUsersReducer,
  },
});

export default store;
