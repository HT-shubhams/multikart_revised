import React from "react";
import img from "../assets/images/multikart_logo.png";
import { DashboardIcon, LinesIcon, UsersIcon } from "../assets/icons";

const Sidebar = () => {
  return (
    <div className="md:fixed md:h-full md:w-64 md:shadow-md">
      <div className="flex items-center p-3 shadow-md md:h-full md:flex-col">
        <img className="h-[28px] w-[157px]" src={img} alt="" />
        <div className="ml-auto md:hidden">
          <LinesIcon />
        </div>
        <div className="hidden text-gray-600 md:ml-9 md:mt-10 md:block md:self-start">
          <div className="uppercase">Main Menu</div>
          <div>
            <div className="mt-7 flex items-center text-lg">
              <div className="mr-3">
                <DashboardIcon />
              </div>
              Dashboard
            </div>
            <div className="mt-7 flex items-center text-lg">
              <div className="mr-3">
                <UsersIcon />
              </div>
              Users
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
