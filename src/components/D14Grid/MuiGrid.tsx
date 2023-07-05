import { Grid, Stack } from "@mui/material";
import React from "react";

function MuiGrid() {
  return (
    <Grid container border={"1px solid"} p={2} rowGap={2} columnGap={1}>
      <Grid item p={2} xs={"auto"} sm={6} md={3} bgcolor={"red"}>
        Text 2
      </Grid>
      <Grid item p={2} xs={6} sm={6} md={3} bgcolor={"blue"}>
        Text 2
      </Grid>
      <Grid item p={2} xs={3} sm={6} md={3} bgcolor={"green"}>
        Text 3
      </Grid>
      <Grid item p={2} xs={9} sm={6} md={3} bgcolor={"violet"}>
        Text 4
      </Grid>
    </Grid>
  );
}

export default MuiGrid;

// Note:
// Grid handle 2 dimention layout
// Grid devide
