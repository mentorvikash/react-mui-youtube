import { Box, Stack, Divider } from "@mui/material";
import React from "react";

function MuiStack() {
  return (
    <Stack
      border={"1px solid red"}
      direction={"row"}
      spacing={2}
      // justifyContent={"space-evenly"}
      p={"10px"}
      divider={<Divider color="red" orientation="vertical" flexItem />}
    >
      <Box
        width={"200px"}
        height={"200px"}
        color={"white"}
        padding={"20px"}
        bgcolor={"gray"}
      >
        Box 1
      </Box>
      <Box
        width={"200px"}
        height={"200px"}
        color={"white"}
        padding={"20px"}
        bgcolor={"blue"}
      >
        Box 2
      </Box>
    </Stack>
  );
}

export default MuiStack;

// Note:
// Defalut property of stack is flex (unidirectional) and direction columns
