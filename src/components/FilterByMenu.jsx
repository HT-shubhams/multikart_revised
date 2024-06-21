import React, { useState, useEffect } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { FilterByIcon, RightTickIcon } from "../assets/icons";

const FilterByMenu = ({ filterOption, setFilterOption }) => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorEl && anchorEl.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  };

  const handleMenuItemClick = (option) => {
    if (selectedOption === option) {
      setSelectedOption(null);
      setFilterOption(null);
    } else {
      setSelectedOption(option);
      setFilterOption(option);
    }
    setOpen(false);
  };

  const handleIconClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prevOpen) => !prevOpen);
  };

  const isSelected = (option) => selectedOption === option;

  useEffect(() => {
    if (!open) {
      setAnchorEl(null);
    }
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <button
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleIconClick}
          className={`flex rounded-md border border-[#777a81] p-2 ${
            selectedOption ? "bg-[#d3cfe5]" : ""
          }`}
        >
          <FilterByIcon
            className="my-1 md:mr-1"
            style={{ cursor: "pointer" }}
          />
          <span className="hidden md:inline">Filter By</span>
        </button>
        <Popper
          open={open}
          anchorEl={anchorEl}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
          style={{ zIndex: 1 }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                    className="text-xs text-[#63666b] md:text-sm"
                    style={{ paddingRight: "20px" }}
                  >
                    <MenuItem
                      onClick={() => handleMenuItemClick("User")}
                      className="relative"
                    >
                      User
                      {isSelected("User") && (
                        <RightTickIcon className="absolute -right-4 h-3 w-4 text-[#0AD22A]" />
                      )}
                    </MenuItem>
                    <MenuItem
                      onClick={() => handleMenuItemClick("Admin")}
                      className="relative"
                    >
                      Admin
                      {isSelected("Admin") && (
                        <RightTickIcon className="absolute -right-4 h-3 w-4 text-[#0AD22A]" />
                      )}
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
};

export default FilterByMenu;
