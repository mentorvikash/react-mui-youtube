import { ArrowDropDown, CatchingPokemon } from "@mui/icons-material";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useEffect, useState } from "react";

function MuiMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [close, setClose] = useState<boolean>(true);

  const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" aria-label="logo" color="inherit">
          <CatchingPokemon />
        </IconButton>
        <Typography variant="h5" component={"div"} sx={{ flexGrow: 2 }}>
          Pokemon
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <Button color={"inherit"}>Feature</Button>
          <Button color={"inherit"}>Pricing</Button>
          <Button color={"inherit"}>About</Button>
          <Button
            color={"inherit"}
            id="user-btn"
            endIcon={<ArrowDropDown />}
            onClick={handleMenu}
            aria-controls={open ? "user-menu" : undefined}
            aria-aria-haspopup={true}
            aria-expanded={open ? true : undefined}
          >
            Menu
          </Button>
          <Button color={"inherit"}>Contact</Button>
        </Stack>
        <Menu
          id="user-menu"
          open={open}
          anchorEl={anchorEl}
          MenuListProps={{
            "aria-labelledby": "user-menu",
          }}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>Upgrade</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default MuiMenu;

// what to use following
// anchorEl
// MenuListProps
// aria-aria-haspopup
// aria-expanded
// MenuListProps
// Go to popover to see all controls
