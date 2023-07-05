import React from "react";
import { Stack, Tooltip, IconButton, Box } from "@mui/material";
import { Delete, Face } from "@mui/icons-material";

function MuiTooltip() {
  return (
    <Box>
      <Tooltip title="delete">
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
      <Tooltip title="face" placement="right" arrow>
        <IconButton>
          <Face />
        </IconButton>
      </Tooltip>
      <Tooltip title="lets delay" enterDelay={300} leaveDelay={200}>
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default MuiTooltip;
