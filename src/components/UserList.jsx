import React, { useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import {
  FilterByIcon,
  GridViewIcon,
  LeftArrowIcon,
  ListViewIcon,
  SearchIcon,
  RightArrowIcon,
} from "../assets/icons";
import UserListView from "./UserListView";
import UserGridView from "./UserGridView";
import useUserStore from "./useUserStore";
import Pagination from "./Pagination";
import SortByMenu from "./SortByMenu";
import Sort from "./Sort";

const UserList = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isGridView, setIsGridView] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortOption, setSortOption] = useState("");

  const users = useUserStore((state) => state.users);

  const navigate = useNavigate();

  const navigateAddUser = () => {
    navigate("/add-user");
  };

  // memoize the sorting function using useCallback
  const handleSortOptionChange = useCallback((option) => {
    setSortOption(option);
  }, []);

  // paginate the initial list of users
  const totalRecords = users.length;
  const totalPages = Math.ceil(totalRecords / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedUsers = users.slice(startIndex, endIndex);

  // filter paginated users based on search query
  const filteredUsers = paginatedUsers.filter(
    (user) =>
      user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // sort filtered users based on sort option here using useMemo
  const sortedUsers = Sort({ filteredUsers, sortOption });

  return (
    <div className="bg-[#F9F9F9]">
      <div className="mt-8 flex justify-between">
        <div className="ml-4 text-2xl md:ml-8">Users</div>
        <div className="flex">
          <button
            className={classNames("rounded-l-md border-2 p-2 md:p-[10px]", {
              "border-transparent bg-[#641CC0] text-white": !isGridView,
              "border-gray-300 bg-white text-[#641CC0]": isGridView,
            })}
            onClick={() => setIsGridView(false)}
          >
            <ListViewIcon className="h-5 w-5" />
          </button>
          <button
            className={classNames("rounded-r-md border-2 p-2 md:p-[10px]", {
              "border-transparent bg-[#641CC0] text-white": isGridView,
              "border-gray-300 bg-white text-[#641CC0]": !isGridView,
            })}
            onClick={() => setIsGridView(true)}
          >
            <GridViewIcon className="h-5 w-5" />
          </button>
          <button
            className="ml-3 mr-5 h-10 w-20 rounded-md bg-[#641CC0] p-2 text-white md:ml-5 md:mr-9 md:h-12 md:w-40"
            onClick={navigateAddUser}
          >
            <span className="md:hidden">+ Add</span>
            <span className="hidden md:block">+ Add User</span>
          </button>
        </div>
      </div>
      <div className="mx-2 mt-4 flex flex-col rounded-lg shadow-md md:mx-9 md:mt-8">
        <div className="mt-2 flex w-full justify-between">
          <div className="flex space-x-3 pl-5 md:pl-8">
            <SortByMenu
              sortOption={sortOption}
              setSortOption={handleSortOptionChange}
            />
            <button className="flex rounded-md border border-[#777a81] p-2">
              <FilterByIcon className="my-auto md:mr-1" />
              <span className="hidden md:inline">Filter By</span>
            </button>
          </div>

          <div className="mr-5 flex items-center md:mr-7">
            <div
              className={classNames(
                "ml-4 flex items-center gap-1 rounded-lg border border-[#777a81] bg-white py-2 pl-2 pr-[4.5px] md:p-2",
                { "!border-[#2e4272]": isInputFocused },
              )}
            >
              <button
                type="button"
                className="aspect-square h-6"
                onClick={() => setIsSearchExpanded(!isSearchExpanded)}
              >
                <SearchIcon className="h-5 w-5" />
              </button>
              <input
                type="text"
                placeholder="Search here"
                className={classNames(
                  "bg-transparent text-black outline-none",
                  { "hidden md:block": !isSearchExpanded },
                  {
                    "w-20 md:w-48": !isSearchExpanded,
                    "w-full": isSearchExpanded,
                  },
                )}
                onBlur={() => {
                  setIsInputFocused(false);
                  setIsSearchExpanded(false);
                }}
                onFocus={() => setIsInputFocused(true)}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex">
          {isGridView ? (
            <UserGridView users={sortedUsers} />
          ) : (
            <UserListView users={sortedUsers} />
          )}
        </div>

        <Pagination
          currentPage={currentPage}
          totalRecords={totalRecords}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={setItemsPerPage}
          LeftArrowIcon={LeftArrowIcon}
          RightArrowIcon={RightArrowIcon}
        />
      </div>
    </div>
  );
};

export default UserList;
