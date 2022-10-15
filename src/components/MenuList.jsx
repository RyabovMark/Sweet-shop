import React, { useState } from "react";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { menuList } from "../data/Data";
import { useLocation, useNavigate } from "react-router-dom";

const MenuList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const scroller = (to) => {
    const el = document.getElementById(to);
    el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollTo = (to) => {
    if (location.pathname === "/Sweet-shop") {
      scroller(to);
    } else {
      new Promise((resolve) => resolve(navigate("/Sweet-shop"))).finally(() =>
        scroller(to)
      );
    }
  };

  return (
    <Box>
      <IconButton
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuOutlinedIcon />
      </IconButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {menuList
          .filter(
            (item) =>
              item.title !== "onemorecake" &&
              item.title !== "+7 (999) 123-45-67"
          )
          .map((item) => (
            <MenuItem onClick={() => scrollTo(item?.scroll)} key={item.id}>
              {item.title}
            </MenuItem>
          ))}
      </Menu>
    </Box>
  );
};

export default MenuList;
