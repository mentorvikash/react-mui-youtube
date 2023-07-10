import React from "react";
import { Box, Stack, styled } from "@mui/material";
// import styled from "@emotion/styled";

const RowBox = styled(Box)(({ theme }) => ({
  height: "200px",
  width: "200px",
  backgroundColor: theme.status.danger,
}));

const RowBox2 = styled(Box)(({ theme }) => ({
  height: "200px",
  width: "200px",
  backgroundColor: theme.palette.nutral.main,
}));

function MuiCustomTheam() {
  return (
    <Stack spacing={3}>
      <Box sx={{ bgcolor: "secondary.main" }}>This is new box</Box>
      <RowBox />
      <RowBox2 />
    </Stack>
  );
}

export default MuiCustomTheam;
