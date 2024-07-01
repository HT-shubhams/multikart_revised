import React from "react";

const UserStatsCard = ({ title, count, icon: IconComponent, bgColor }) => (
  <div className="m-5 flex justify-between rounded-xl border p-5 shadow-lg md:w-64">
    <div>
      <div className="text-base">{title}</div>
      <div className="mt-3 text-2xl font-medium">{count}</div>
    </div>
    <div
      className={`flex h-16 w-16 items-center justify-center rounded-full ${bgColor}`}
    >
      <IconComponent />
    </div>
  </div>
);

export default UserStatsCard;
