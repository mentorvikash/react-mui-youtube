import React, { useState, forwardRef } from "react";
import { Snackbar, Button, Alert, AlertProps } from "@mui/material";
import { Elevator } from "@mui/icons-material";

const SnackBarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackBarAlert(props, ref) {
    return <Alert elevation={4} ref={ref} {...props} />;
  }
);

function MuiSnackBar() {
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = (event?: React.SyntheticEvent | Event, resion?: string) => {
    if (resion === "anyway") {
      return;
    }
    setOpen(false);
  };
  return (
    <>
      <Button onClick={() => setOpen(true)}>Generate Error</Button>
      {/* <Snackbar
        message="Error is due to some problem"
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      /> */}

      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <SnackBarAlert onClose={handleClose} severity="success" >success final message</SnackBarAlert>
      </Snackbar>
    </>
  );
}

export default MuiSnackBar;

// onclose used in SnackBar is used to implement the auto close functionality
// onclose used in SnackBarAlert is used to implement a close button with aleart text