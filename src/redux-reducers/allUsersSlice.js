import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllUsersService } from "../services/userService";

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
  },
});

export const getAllUsers = (state) => state.allUsers;
export const allUsersReducer = allUsersSlice.reducer;
