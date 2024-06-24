import React from "react";
import img from "../assets/images/multikart_logo.png";
import { DashboardIcon, LinesIcon, UsersIcon } from "../assets/icons";

const Sidebar = () => {
  return (
    <div className="md:fixed md:h-full md:w-64 md:shadow-md">
      <div className="flex items-center shadow-md md:h-full md:flex-col">
        <img className="m-3 h-[28px] w-[157px]" src={img} alt="" />
        <div className="ml-auto md:hidden">
          <LinesIcon />
        </div>
        <div className="hidden text-gray-600 md:mt-10 md:block md:self-start">
          <div className="ml-9 uppercase">Main Menu</div>
          <div className="w-[245px]">
            <div className="mt-6 flex w-full rounded-br-full rounded-tr-3xl bg-[#f0e9f9] text-[#641cc0]">
              <div className="w-1 rounded-br-full rounded-tr-full bg-[#641cc0]"></div>
              <div className="my-3 flex items-center text-lg">
                <div className="ml-9 mr-3">
                  <DashboardIcon />
                </div>
                Dashboard
              </div>
            </div>
            <div className="flex items-center text-lg">
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
