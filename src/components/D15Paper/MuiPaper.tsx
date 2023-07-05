import { Grid, Paper } from "@mui/material";
import React from "react";

function MuiPaper() {
  return (
    <Paper elevation={4} sx={{padding: "23px"}}  >
      <Grid container p={2} rowGap={2} columnGap={1}>
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
    </Paper>
  );
}

export default MuiPaper;

// use with from or pard and component to show visual hyrarchy