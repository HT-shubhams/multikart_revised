import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import classnames from "classnames";
import { DashboardIcon, UsersIcon } from "../assets/icons";
import { supabase } from "../utils/supabaseClient";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MobileMenu = ({ open, onClose, anchorEl, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    onClose();
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error during sign out:", error);
      toast.error("Failed to sign out. Please try again.");
    } else {
      console.log("User signed out successfully");
      toast.success("Signed out successfully");
      setIsAuthenticated(false);
      navigate("/sign-in");
    }
  };

  const isActive = (path) => {
    return window.location.pathname === path;
  };

  const activeColor = "#641cc0";
  const defaultColor = "#63666B";

  return (
    <Menu
      id="mobile-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <MenuItem
        component={Link}
        to="/dashboard"
        className={classnames("flex items-center text-lg", {
          "bg-[#f0e9f9] text-[#641cc0]": isActive("/dashboard"),
        })}
        onClick={handleClick}
      >
        <DashboardIcon
          color={isActive("/dashboard") ? activeColor : defaultColor}
        />
        <span className="ml-3">Dashboard</span>
      </MenuItem>
      <MenuItem
        component={Link}
        to="/users"
        className={classnames("flex items-center text-lg", {
          "text-[#641cc0]": isActive("/users"),
        })}
        onClick={handleClick}
      >
        <UsersIcon color={isActive("/users") ? activeColor : defaultColor} />
        <span className="ml-3">Users</span>
      </MenuItem>
      <MenuItem
        className="flex items-center text-lg"
        onClick={() => {
          handleSignOut();
          handleClick();
        }}
      >
        <span className="ml-3 text-[#63666B]">Sign Out</span>
      </MenuItem>
    </Menu>
  );
};

export default MobileMenu;
