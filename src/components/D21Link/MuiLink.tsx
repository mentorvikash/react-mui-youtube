import React from "react";
import { Stack, Link, Typography } from "@mui/material";

function MuiLink() {
  return (
    <Stack spacing={2}>
      <Typography variant="h5" >
        <Link>Link 1</Link>
      </Typography>
      <Link href="#" underline="hover" variant="body2">
        Link 2
      </Link>
      <Link href="#" underline="none" color={"text.secondary"} >
        Link 3
      </Link>
    </Stack>
  );
}

export default MuiLink;
