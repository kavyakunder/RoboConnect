import React from "react";
import Sidebar from "../components/Sidebar";
import PeopleList from "../components/PeopleList";
import FeedPosts from "../components/FeedPosts";

const Explore = () => {
  return (
    <>
      <div className="flex justify-between w-screen h-screen px-4 text-gray-700">
        <Sidebar />
        <div className="flex flex-col flex-grow border-l border-r border-gray-300">
          <div className="flex-grow h-0 overflow-auto mt-20">
            <h1 className="text-3xl text-center mt-8 ">
              Explore trending postss
            </h1>
            <FeedPosts />
          </div>
        </div>
        <div className="flex flex-col flex-shrink-0 w-1/4 py-4 pl-4 ">
          <h3 className="mt-24 font-semibold text-2xl text-center 	">
            People you can follow
          </h3>
          <PeopleList />
        </div>
      </div>
    </>
  );
};

export default Explore;
