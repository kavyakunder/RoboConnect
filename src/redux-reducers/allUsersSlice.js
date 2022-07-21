import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllUsersService } from "../services/userService";
import {
  followUserService,
  unfollowUserService,
} from "../services/userService";
import { updateUserProfile } from "./userProfileSlice";
export const fetchAllUsers = createAsyncThunk(
  "allUsers/fetchAllUsers",
  async (rejectWithValue) => {
    try {
      const { data } = await fetchAllUsersService();
      const { users } = data;
      return users;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const followUser = createAsyncThunk(
  "allUsers/followUser",
  async ({ token, followUserId }, { rejectWithValue }) => {
    try {
      const { data } = await followUserService({ token, followUserId });
      console.log("data in slice", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const unfollowUser = createAsyncThunk(
  "allUsers/unfollowUser",
  async ({ token, userId, dispatch }, { rejectWithValue }) => {
    try {
      const { data } = await unfollowUserService(token, userId);
      dispatch(updateUserProfile({ token: token, userData: data.user }));
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const updateFollowingUser = (users, followingUser) => {
  return [...users].map((user) => {
    return user._id === followingUser._id ? followingUser : user;
  });
};

const updateFollowedUser = (users, followedUser) => {
  return [...users].map((user) =>
    user._id === followedUser._id ? followedUser : user
  );
};

const allUsersSlice = createSlice({
  name: "allUsers",
  initialState: {
    users: [],
    usersLoading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchAllUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.usersLoading = false;
    },
    [fetchAllUsers.pending]: (state, action) => {
      state.usersLoading = true;
    },
    [followUser.fulfilled]: (state, { payload: { user, followUser } }) => {
      state.users = updateFollowingUser(state.users, user);
      state.users = updateFollowedUser(state.users, followUser);
    },

    [unfollowUser.fulfilled]: (state, { payload: { user, followUser } }) => {
      state.users = updateFollowingUser(state.users, user);
      state.users = updateFollowedUser(state.users, followUser);
    },
  },
});

export const getAllUsers = (state) => state.allUsers;
export const allUsersReducer = allUsersSlice.reducer;
