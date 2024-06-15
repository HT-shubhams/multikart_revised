import React from "react";
import useUserStore from "./useUserStore";
import UserCard from "./UserCard";

const UserGridView = () => {
  const users = useUserStore((state) => state.users);

  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserGridView;
