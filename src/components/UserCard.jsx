import React, { useState } from "react";
import { ActiveDotIcon, InactiveDotIcon, OptionsIcon } from "../assets/icons";
import { useNavigate } from "react-router-dom";

export default function UserCard({ user }) {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigateToEditUser = () => {
    navigate(`/edit-user/${user.id}`);
  };

  const handleDeleteUser = () => {
    // Implement delete user logic here
    console.log("User deleted:", user.id);
    // Optionally, navigate to another route or refresh the list
  };

  return (
    <div className="relative flex items-center border border-[#E0E0E2] p-4 rounded-md bg-[#FAFAFA] w-full max-w-[370px]">
      <div className="photo-container pr-4">
        <img
          src={user.photo}
          alt={`${user.firstName} ${user.lastName}`}
          className="rounded-full w-[75px] h-[75px] min-w-[75px] min-h-[75px]"
        />
      </div>
      <div className="flex flex-col justify-center text-[#63666B]">
        <p className="font-poppins text-[18px] font-medium leading-[27px] text-left">
          {`${user.firstName} ${user.lastName}`}
        </p>
        <p
          className="font-poppins text-[14px] font-normal leading-[21px] text-left text-ellipsis whitespace-nowrap overflow-hidden max-w-[200px]"
          title={user.email}
        >
          {user.email}
        </p>

        <div className="flex items-center">
          {user.status === "Active" ? (
            <div className="flex items-center">
              <ActiveDotIcon />
              <span className="font-poppins text-[14px] font-normal leading-[21px] text-left ml-1">
                Active
              </span>
            </div>
          ) : (
            <div className="flex items-center">
              <InactiveDotIcon />
              <span className="font-poppins text-[14px] font-normal leading-[21px] text-left ml-1">
                Inactive
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="ml-auto mb-auto relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="focus:outline-none"
        >
          <OptionsIcon />
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 py-2 bg-white border border-gray-200 rounded-md shadow-lg z-10">
            <button
              onClick={() => {
                navigateToEditUser();
                setDropdownOpen(false);
              }}
              className="block px-4 py-2 text-gray-700 text-left hover:bg-gray-100 w-full"
            >
              Edit
            </button>
            <button
              onClick={() => {
                handleDeleteUser();
                setDropdownOpen(false);
              }}
              className="block px-4 py-2 text-gray-700 text-left hover:bg-gray-100 w-full"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
