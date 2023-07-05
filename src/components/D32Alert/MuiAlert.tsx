import React from "react";
import { Stack, Alert, Box, Button, AlertTitle } from "@mui/material";
import { Close, Undo } from "@mui/icons-material";

function MuiAlert() {
  return (
    <Stack spacing={2}>
      <Box gap={1}>
        <Alert severity="error" onClose={() => alert("finally closed")}>
          this is an error alert
        </Alert>
        <Alert severity="warning" icon={<Undo />}>
          this is an warning alert
        </Alert>
        <Alert
          severity="info"
          action={
            <Button color="inherit" size="small">
              UNDO{" "}
            </Button>
          }
        >
          this is an info alert
        </Alert>
        <Alert severity="success">this is an success alert</Alert>
      </Box>
      <Stack spacing={1}>
        <Alert variant="outlined" severity="error">
          this is an error alert
        </Alert>
        <Alert variant="outlined" severity="warning">
          this is an warning alert
        </Alert>
        <Alert variant="outlined" severity="info">
          this is an info alert
        </Alert>
        <Alert variant="outlined" severity="success">
          this is an success alert
        </Alert>
      </Stack>
      <Stack spacing={1}>
        <Alert variant="filled" severity="error">
          <AlertTitle>Error</AlertTitle>
          this is an error alert
        </Alert>
        <Alert variant="filled" severity="warning">
          <AlertTitle>warning</AlertTitle>
          this is an warning alert
        </Alert>
        <Alert variant="filled" severity="info">
          <AlertTitle>info</AlertTitle>
          this is an info alert
        </Alert>
        <Alert variant="filled" severity="success">
          <AlertTitle>success</AlertTitle>
          this is an success alert
        </Alert>
      </Stack>
    </Stack>
  );
}

export default MuiAlert;
