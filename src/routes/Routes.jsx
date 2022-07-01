import React from "react";
import { Routes, Route } from "react-router-dom";
import Bookmark from "../pages/Bookmark";
import Explore from "../pages/Explore";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>
    </>
  );
};

export default AllRoutes;