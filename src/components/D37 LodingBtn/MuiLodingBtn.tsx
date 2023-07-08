import React from "react";
import { Stack, Divider } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { PlayArrow } from "@mui/icons-material";

function MuiLodingBtn() {
  return (
    <Stack spacing={2} direction={"row"}>
      <LoadingButton aria-label="loding button" variant="contained">
        Save
      </LoadingButton>
      <LoadingButton loading variant="contained"></LoadingButton>
      <Divider orientation="vertical" />
      <LoadingButton variant="contained">Play Now</LoadingButton>

      <LoadingButton loading variant="outlined" loadingIndicator="Loding...">
        Play Now
      </LoadingButton>
      <Divider orientation="vertical" />
      <LoadingButton variant="outlined" startIcon={<PlayArrow />}>
        Play Now Again
      </LoadingButton>
      <LoadingButton
        loading
        variant="outlined"
        startIcon={<PlayArrow />}
        loadingPosition="start"
      >
        Play Now Again
      </LoadingButton>
    </Stack>
  );
}

export default MuiLodingBtn;

// Mui lab offer a loading button which offers both button and loding functionality
