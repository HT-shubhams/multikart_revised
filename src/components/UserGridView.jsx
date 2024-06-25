import React from "react";
import UserCard from "./UserCard";

const UserGridView = ({ users }) => {
  return (
    <div className="flex flex-wrap items-center justify-start gap-4 p-5 md:p-8">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserGridView;
