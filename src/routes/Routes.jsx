import React from "react";
import { Routes, Route } from "react-router-dom";
import Bookmark from "../pages/Bookmark";
import Explore from "../pages/Explore";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import { PrivateRoutes } from "./PrivateRoutes";
import SinglePost from "../pages/SinglePost";
import Liked from "../pages/Liked";
import NotFound from "../pages/NotFound";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/explore" element={<Explore />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/post/:postId" element={<SinglePost />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
