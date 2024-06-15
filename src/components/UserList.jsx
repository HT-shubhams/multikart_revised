import React, { useState } from "react";
import classNames from "classnames";
import {
  FilterByIcon,
  GridViewIcon,
  ListViewIcon,
  SearchIcon,
  SortByIcon,
} from "../assets/icons";
import UserListView from "./UserListView";
import UserGridView from "./UserGridView";

const UserList = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isGridView, setIsGridView] = useState(true);

  return (
    <div className="bg-[#F9F9F9]">
      <div className="flex justify-between mt-8">
        <div className="text-2xl ml-4 md:ml-8">Users</div>
        <div className="flex">
          <button
            className="bg-[#641CC0] text-white p-2 md:p-[10px] rounded-l-md"
            onClick={() => {
              setIsGridView(false);
            }}
          >
            <ListViewIcon className="w-5 h-5" />
          </button>
          <button
            className="bg-white p-2 rounded-r-md border-2 border-gray-300 ml-0"
            onClick={() => setIsGridView(true)}
          >
            <GridViewIcon className="w-5 h-5 text-[#641CC0]" />
          </button>
          <button className="bg-[#641CC0] text-white p-2 rounded-md w-20 h-10 md:w-40 md:h-12 ml-3 md:ml-5 mr-5 md:mr-9">
            <span className="md:hidden">+ Add</span>
            <span className="hidden md:block">+ Add User</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-4 md:mt-8 rounded-lg shadow-md mx-2 md:mx-9">
        <div className="flex justify-between w-full">
          <div className="flex space-x-3">
            <button className="flex p-2 border border-[#777a81] rounded-md items-center ml-5 md:ml-8">
              <SortByIcon className="md:mr-2" />
              <span className="hidden md:inline">Sort By</span>
            </button>
            <button className="flex p-2 border border-[#777a81] rounded-md">
              <FilterByIcon className="md:mr-1 my-auto" />
              <span className="hidden md:inline">Filter By</span>
            </button>
          </div>

          <div className="flex items-center mr-5 md:mr-7">
            <div
              className={classNames(
                "flex items-center gap-1 bg-white py-2 pl-2 pr-[4.5px] md:p-2 rounded-lg border border-[#777a81] ml-4",
                { "!border-[#2e4272]": isInputFocused }
              )}
            >
              <button
                type="button"
                className="h-6 aspect-square"
                onClick={() => setIsSearchExpanded(!isSearchExpanded)}
              >
                <SearchIcon className="w-5 h-5" />
              </button>
              <input
                type="text"
                placeholder="Search here"
                className={classNames(
                  "bg-transparent outline-none text-black",
                  { "hidden md:block": !isSearchExpanded }
                )}
                onBlur={() => {
                  setIsInputFocused(false);
                  setIsSearchExpanded(false);
                }}
                onFocus={() => setIsInputFocused(true)}
              />
            </div>
          </div>
        </div>

        <div className="flex">
          {isGridView ? <UserGridView /> : <UserListView />}
        </div>
      </div>
    </div>
  );
};

export default UserList;
