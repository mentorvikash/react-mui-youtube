import React from "react";
import { Stack, Avatar, AvatarGroup } from "@mui/material";

function MuiAvatar() {
  return (
    <Stack spacing={2}>
      <Stack direction={"row"} spacing={2}>
        <Avatar sx={{ bgcolor: "primary.light", padding: "5px" }}>AB</Avatar>
        <Avatar sx={{ bgcolor: "success.light", padding: "5px" }}>CD</Avatar>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <AvatarGroup max={3}>
          <Avatar
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="john singh "
            sx={{ bgcolor: "primary.light" }}
          >
            AB
          </Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/women/26.jpg"
            alt="singhiii"
            sx={{ bgcolor: "success.light" }}
          >
            CD
          </Avatar>
          <Avatar sx={{ bgcolor: "primary.light", padding: "5px" }}>AB</Avatar>
          <Avatar sx={{ bgcolor: "success.light", padding: "5px" }}>CD</Avatar>
        </AvatarGroup>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <Avatar
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="john singh "
          sx={{ bgcolor: "primary.light" }}
          variant="square"
        >
          AB
        </Avatar>
        <Avatar
          src="https://randomuser.me/api/portraits/women/26.jpg"
          alt="singhiii"
          sx={{ bgcolor: "success.light" }}
          variant="rounded"
        >
          CD
        </Avatar>
        <Avatar
          sx={{
            bgcolor: "primary.light",
            padding: "5px",
            width: "30px",
            height: "30px",
          }}
        >
          AB
        </Avatar>
      </Stack>
    </Stack>
  );
}

export default MuiAvatar;
