import React from "react";
import useUserStore from "./useUserStore";
import {
  ActiveUsersIcon,
  InactiveUsersIcon,
  TotalUsersIcon,
} from "../assets/icons";
import TotalActiveUsersChart from "./TotalActiveUsersChart";
import UserStatsCard from "./UserStatsCard";

const Dashboard = () => {
  const users = useUserStore((state) => state.users);
  const totalUsers = users.length;
  const activeUsers = users.filter((user) => user.status === "Active").length;
  const inactiveUsers = users.filter(
    (user) => user.status === "Inactive",
  ).length;

  return (
    <div className="md:ml-5">
      <div className="ml-4 mt-8 text-2xl font-normal">Dashboard</div>

      <div className="md:flex">
        <UserStatsCard
          title="Total Users"
          count={totalUsers}
          icon={TotalUsersIcon}
          bgColor="bg-[#fff8e7]"
        />

        <UserStatsCard
          title="Active Users"
          count={activeUsers}
          icon={ActiveUsersIcon}
          bgColor="bg-[#ebfcf0]"
        />

        <UserStatsCard
          title="Inactive Users"
          count={inactiveUsers}
          icon={InactiveUsersIcon}
          bgColor="bg-[#fee6e6]"
        />
      </div>

      <div className="ml-9 mt-14 hidden h-[400px] w-[551px] md:block">
        <TotalActiveUsersChart />
      </div>
    </div>
  );
};

export default Dashboard;
