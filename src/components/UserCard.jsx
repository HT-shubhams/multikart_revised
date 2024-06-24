import React, { useState } from "react";
import { ActiveDotIcon, InactiveDotIcon, OptionsIcon } from "../assets/icons";
import { useNavigate } from "react-router-dom";
import { DeleteModal } from "./DeleteModal";
import { toast } from "react-toastify";
import useUserStore from "./useUserStore";

export default function UserCard({ user }) {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navigateToEditUser = () => {
    navigate(`/edit-user/${user.id}`);
  };

  const handleDeleteUser = () => {
    setShowModal(true);
    useUserStore.getState().deleteUser(user.id);
    setShowModal(false);
    toast.error("User has been deleted successfully!");
    navigate("/users");
  };

  return (
    <div className="relative flex w-full max-w-[370px] items-center rounded-md border border-[#E0E0E2] bg-[#FAFAFA] p-4">
      {showModal && (
        <div className="fixed inset-0 z-20 flex items-center justify-center">
          <DeleteModal
            onConfirm={handleDeleteUser}
            onCancel={() => setShowModal(false)}
          />
        </div>
      )}
      <div className="photo-container pr-4">
        <img
          src={user.photo}
          alt={`${user.firstName} ${user.lastName}`}
          className="h-[75px] min-h-[75px] w-[75px] min-w-[75px] rounded-full"
        />
      </div>
      <div className="flex flex-col justify-center text-[#63666B]">
        <p className="font-poppins text-left text-[18px] font-medium leading-[27px]">
          {`${user.firstName} ${user.lastName}`}
        </p>
        <p
          className="font-poppins max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap text-left text-[14px] font-normal leading-[21px]"
          title={user.email}
        >
          {user.email}
        </p>
        <div className="flex items-center">
          {user.status === "Active" ? (
            <div className="flex items-center">
              <ActiveDotIcon />
              <span className="font-poppins ml-1 text-left text-[14px] font-normal leading-[21px]">
                Active
              </span>
            </div>
          ) : (
            <div className="flex items-center">
              <InactiveDotIcon />
              <span className="font-poppins ml-1 text-left text-[14px] font-normal leading-[21px]">
                Inactive
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="relative mb-auto ml-auto">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="focus:outline-none"
        >
          <OptionsIcon />
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 z-10 mt-2 w-40 rounded-md border border-gray-200 bg-white py-2 shadow-lg">
            <button
              onClick={() => {
                navigateToEditUser();
                setDropdownOpen(false);
              }}
              className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
            >
              Edit
            </button>
            <button
              onClick={() => {
                setShowModal(true);
                setDropdownOpen(false);
              }}
              className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
