import React from "react";
import { Stack, CircularProgress, LinearProgress } from "@mui/material";

function MuiProgressBar() {
  return (
    <>
      <Stack  spacing={2} gap={2}>
        <CircularProgress />
        <CircularProgress color="secondary" />
        <CircularProgress variant="determinate" value={60} />
      </Stack>
      <Stack spacing={2}>
        <LinearProgress />
        <LinearProgress color="secondary" />
        <LinearProgress variant="determinate" value={60} />
      </Stack>
    </>
  );
}

export default MuiProgressBar;
