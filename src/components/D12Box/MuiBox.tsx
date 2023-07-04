import { Box } from "@mui/material";
import React from "react";

function MuiBox() {
  return (
    <> 
      <Box
        sx={{
          color: "secondary.main",
          width: "600px",
          height: "200px",
          background: "lightgray",
          padding: "15px",
          margin: "10px",
          "&:hover": {
            background: "primary.main",
            fontSize: "12px",
          },
        }}
      >
        This is box but a span tag
      </Box>
      <Box
        width={"auto"}
        p={2}
        color={"white"}
        bgcolor={"black"}
        component={"span"}
      >
        This is box but a span tag
      </Box>
    </>
  );
}

export default MuiBox;
