import React from "react";
import { LinesIcon } from "../assets/icons";

const Header = () => {
  return (
    <div className="h-14 bg-[#ffffff] shadow-md">
      <div className="flex h-full items-center">
        <LinesIcon className={"ml-8"} />
      </div>
    </div>
  );
};

export default Header;
