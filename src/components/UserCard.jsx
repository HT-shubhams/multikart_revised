import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="border border-[#777a81] rounded-lg flex p-4 w-[350px] m-5">
      <div className="flex-shrink-0">
        <img
          src={user.photo}
          alt={`${user.firstName} ${user.lastName}`}
          className="w-24 h-24 rounded-full object-cover"
        />
      </div>
      <div className="ml-4">
        <div className="text-lg font-semibold">
          {user.firstName} {user.lastName}
        </div>
        <div className="text-sm text-gray-600">{user.email}</div>
        <div className="text-sm">{user.status}</div>
      </div>
    </div>
  );
};

export default UserCard;
