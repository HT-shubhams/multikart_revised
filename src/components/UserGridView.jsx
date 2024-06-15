import React from "react";
import useUserStore from "./useUserStore";
import UserCard from "./UserCard";

const UserGridView = () => {
  const users = useUserStore((state) => state.users);

  return (
    // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-8 w-full">
    <div className="flex justify-start items-center flex-wrap gap-4 p-5 md:p-8">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserGridView;
