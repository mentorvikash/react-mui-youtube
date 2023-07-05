import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import { Home, Favorite, Person } from "@mui/icons-material";
import React, { useState } from "react";

function MuiBottomNavigatoin() {
  const [value, setValue] = useState<number>(0);

  console.log(value);

  return (
    <Stack>
      {value === 0 && (
        <Box>
          <Typography variant="h4">HOME</Typography>
        </Box>
      )}
      {value === 1 && (
        <Box>
          <Typography variant="h4">Favroite</Typography>
        </Box>
      )}
      {value === 2 && (
        <Box>
          <Typography variant="h4">Person</Typography>
        </Box>
      )}
      <BottomNavigation
        sx={{
          width: "100%",
          position: "absolute",
          bottom: "0",
        }}
        value={value}
        onChange={(event, newvalue) => setValue(newvalue)}
      >
        <BottomNavigationAction showLabel label="home" icon={<Home />} />
        <BottomNavigationAction showLabel label="favrite" icon={<Favorite />} />
        <BottomNavigationAction showLabel label="person" icon={<Person />} />
      </BottomNavigation>
    </Stack>
  );
}

export default MuiBottomNavigatoin;
