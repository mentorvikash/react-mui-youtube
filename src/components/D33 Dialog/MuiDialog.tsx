import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

function MuiDialog() {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Dialogs</Button>
      <Dialog
        open={open}
        aria-labelledby="dialog-title"
        aria-aria-describedby="dialog-descriptation"
        onClose={() => setOpen(false)}
      >
        <DialogTitle id="dialog-title">Dialog Panel</DialogTitle>
        <DialogContent id="dialog descriptation">
          <DialogContentText>
            Dialog Panel description can we written in any format.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} >Submit</Button>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default MuiDialog;
