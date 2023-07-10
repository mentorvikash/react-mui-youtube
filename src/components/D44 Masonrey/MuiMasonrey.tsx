import { Expand, ExpandMore } from "@mui/icons-material";
import { Masonry } from "@mui/lab";
import {
  Box,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import React from "react";

const heights = ["122", "15", "52", "45", "141", "63", "74", "84"];

function MuiMasonrey() {
  return (
    <>
      <Box sx={{ width: "300px", minHeight: "400px" }}>
        <Masonry columns={4} spacing={1}>
          {heights.map((height, index) => (
            <Paper
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: `${height}px`,
                border: "1px solid",
              }}
            >
              index ${index}
            </Paper>
          ))}
        </Masonry>
      </Box>
      <Box sx={{ minHeight: "400px" }}>
        <Masonry columns={4} spacing={1}>
          {heights.map((height, index) => (
            <Paper key={index}>
              <Accordion sx={{ minHeight: height + "px" }}>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  Task {index}
                </AccordionSummary>
                <AccordionDetails>according Detials {height} </AccordionDetails>
              </Accordion>
            </Paper>
          ))}
        </Masonry>
      </Box>
    </>
  );
}

export default MuiMasonrey;
