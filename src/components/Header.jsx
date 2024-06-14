import React from "react";
import { LinesIcon } from "../assets/icons";

const Header = () => {
  return (
    <div className="h-14 bg-[#ffffff] shadow-md">
      <div className="flex items-center h-full">
        <LinesIcon className={"ml-8"} />
      </div>
    </div>
  );
};

export default Header;
