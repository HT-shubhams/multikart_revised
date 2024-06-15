import React from "react";
import { ActiveDotIcon, InactiveDotIcon, OptionsIcon } from "../assets/icons";

export default function UserCard({ user }) {
  return (
    <div className="flex items-center border border-[#E0E0E2] p-4 rounded-md bg-[#FAFAFA] w-full max-w-[370px]">
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
      <div className="ml-auto mb-auto">
        <OptionsIcon />
      </div>
    </div>
  );
}
