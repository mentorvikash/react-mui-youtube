import { Button, IconButton, Stack } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

function Buttons() {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction={"row"}>
        <Button variant="text">text</Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          {" "}
          primary{" "}
        </Button>
        <Button variant="contained" color="secondary">
          {" "}
          secondary{" "}
        </Button>
        <Button variant="contained" color="success">
          {" "}
          success{" "}
        </Button>
        <Button variant="contained" color="warning">
          {" "}
          warning{" "}
        </Button>
        <Button variant="contained" color="info">
          {" "}
          info{" "}
        </Button>
        <Button variant="contained" color="error">
          {" "}
          error{" "}
        </Button>
        <Button variant="contained" color="inherit">
          {" "}
          inherit{" "}
        </Button>
      </Stack>
      <Stack
        display={"block"}
        spacing={2}
        direction={"row"}
        textAlign={"start"}
      >
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
        <IconButton aria-label="message send button" size="large">
          <SendIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="message send button">
          <SendIcon fontSize="medium" />
        </IconButton>
        <IconButton aria-label="message send button" color="secondary">
          <SendIcon fontSize="medium" />
        </IconButton>
        <IconButton
          aria-label="message send button"
          size="small"
          color="success"
        >
          <SendIcon fontSize="inherit" />
        </IconButton>
      </Stack>
      {/* Disable alivation  */}
      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" onClick={() => alert("You click me")}>
          Click Me
        </Button>
        <Button variant="contained" disableElevation>
          Disable alivation
        </Button>
        <Button variant="contained" disableRipple>
          with alivation
        </Button>
      </Stack>
    </Stack>
  );
}

export default Buttons;
