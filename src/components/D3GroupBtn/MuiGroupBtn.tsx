import { Button, Stack, ButtonGroup } from "@mui/material";
import React from "react";

function MuiGroupBtn() {
  return (
    <Stack spacing={2}>
      <Stack direction={"row"}>
        <ButtonGroup variant="contained" aria-label=" group buton to choose">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction={"row"}>
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="secondary"
        >
          <Button onClick={() => alert("top btn clicked")} >Top</Button>
          <Button>Center</Button>
          <Button>Bottom</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
}

export default MuiGroupBtn;
