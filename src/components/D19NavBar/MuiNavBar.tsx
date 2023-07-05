import { CatchingPokemon } from "@mui/icons-material";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import React, { useEffect } from "react";

function MuiNavBar() {
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
          <Button color={"inherit"}>Contact</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default MuiNavBar;
