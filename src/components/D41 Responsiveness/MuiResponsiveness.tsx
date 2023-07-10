import React from "react";
import { Box, Grid, Stack } from "@mui/material";

function MuiResponsiveness() {
  return (
    <Box>
      <Box
        mb={"12px"}
        width={{
          xs: "100px", // 0
          sm: "200px", // 600
          md: "300px", // 900
          lg: "400px", // 1200
          xl: "500px", // 1536
        }}
        bgcolor={{
          xs: "red",
          sm: "blue",
          md: "green",
          lg: "yellow",
          xl: "orange",
        }}
        height="100px"
      ></Box>
      <Stack
        gap={2}
        justifyContent={"space-evenly"}
        flexWrap={"wrap"}
        direction={{ xs: "column", sm: "row" }}
      >
        <Box width={200} height={200} bgcolor={"orange"}></Box>
        <Box width={200} height={200} bgcolor={"blue"}></Box>
        <Box width={200} height={200} bgcolor={"black"}></Box>
        <Box width={200} height={200} bgcolor={"green"}></Box>
        <Box width={200} height={200} bgcolor={"gray"}></Box>
      </Stack>

      <Grid container  >
        <Grid item xs={6} md={3} bgcolor={"yellow"}>
          Grid 1
        </Grid>
        <Grid item xs={6} md={3} bgcolor={"yellow"}>
          Grid 2
        </Grid>
        <Grid item xs={6} md={3} bgcolor={"yellow"}>
          Grid 3
        </Grid>
        <Grid item xs={6} md={3} bgcolor={"yellow"}>
          Grid 4
        </Grid>
        <Grid item xs={6} md={3} bgcolor={"yellow"}>
          Grid 5
        </Grid>
        <Grid item xs={6} md={3} bgcolor={"yellow"}>
          Grid 6
        </Grid>
      </Grid>
    </Box>
  );
}

export default MuiResponsiveness;
