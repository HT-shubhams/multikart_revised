import React from "react";
import { HomeIcon } from "../assets/icons/HomeIcon";

const AddUser = () => {
  return (
    <div>
      <div className="mt-8 md:mt-11 md:flex md:justify-between md:items-center md:mr-12 text-[#63666b]">
        <div className="text-2xl ml-4 md:ml-8 text-black">Users</div>
        <div className="flex ml-4 mt-3 md:mt-0 md:ml-8 items-center text-sm md:text-lg">
          <div className="pr-2 md:pr-4">
            <HomeIcon />
          </div>
          / <span className="px-2 md:px-4 text-black">Users</span> /{" "}
          <span className="px-2 md:px-4">Add User</span>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
