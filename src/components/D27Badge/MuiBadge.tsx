import React from "react";
import { Stack, Badge } from "@mui/material";
import { Mail } from "@mui/icons-material";

function MuiBadge() {
  return (
    <Stack direction={"row"} spacing={4}>
      <Badge color="success" badgeContent={12}>
        <Mail />
      </Badge>
      <Badge color="success" badgeContent={0}>
        <Mail />
      </Badge>
      <Badge color="primary" badgeContent={101}>
        <Mail />
      </Badge>
      <Badge color="secondary" badgeContent={101} max={1000}>
        <Mail />
      </Badge>
      <Badge
        color="info"
        badgeContent={12}
        variant="dot"
        invisible={6 > 7 ? true : false}
      >
        <Mail />
      </Badge>
      <Badge color="success" badgeContent={0} showZero>
        <Mail />
      </Badge>
    </Stack>
  );
}

export default MuiBadge;
