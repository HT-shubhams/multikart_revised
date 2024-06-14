import React from "react";
import {
  FilterByIcon,
  GridViewIcon,
  ListViewIcon,
  SearchIcon,
  SortByIcon,
} from "../assets/icons";

const UserList = () => {
  return (
    <div className="bg-[#F9F9F9]">
      <div className="flex justify-between mt-8">
        <div className="text-2xl ml-4 md:ml-8">Users</div>
        <div className="flex ">
          <button className="bg-[#641CC0] text-white p-2 rounded-l-md">
            <ListViewIcon className="w-5 h-5" />
          </button>
          <button className="bg-white p-2 rounded-r-md border-2 border-gray-300 ml-0">
            <GridViewIcon className="w-5 h-5 text-[#641CC0]" />
          </button>
          <button className="bg-[#641CC0] text-white p-2 rounded-md w-20 h-10 md:w-40 md:h-12 ml-3 md:ml-5 mr-5 md:mr-9">
            {window.innerWidth < 768 ? "+ Add" : "+ Add User"}
          </button>
        </div>
      </div>
      <div className="flex mt-4 md:mt-8 rounded-lg shadow-md mx-2 md:mx-9">
        <div className="flex justify-between w-full ">
          <div className="flex space-x-3">
            <button className="flex p-2 border border-[#777a81] rounded-md items-center">
              <SortByIcon className={"md:mr-2"} />
              <span className="hidden md:inline">Sort By</span>
            </button>
            <button className="flex p-2 border border-[#777a81] rounded-md">
              <FilterByIcon className={"md:mr-1 my-auto"} />
              <span className="hidden md:inline">Filter By</span>
            </button>
          </div>

          <div className="flex">
            <div className="border p-2 md:p-3 border-[#777a81] rounded-md items-center">
              <SearchIcon className={"my-auto"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
