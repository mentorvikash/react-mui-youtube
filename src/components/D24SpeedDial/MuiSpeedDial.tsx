import React from "react";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { CopyAll, Print, Share, Edit } from "@mui/icons-material";

function MuiSpeedDial() {
  return (
    <SpeedDial
      ariaLabel="speed dial"
      icon={<SpeedDialIcon openIcon={<Edit />} />}
      sx={{ position: "absolute", bottom: "16px", right: "16px" }}
    >
      <SpeedDialAction tooltipOpen icon={<CopyAll />} tooltipTitle="Copy" />
      <SpeedDialAction tooltipOpen icon={<Print />} tooltipTitle="Print" />
      <SpeedDialAction tooltipOpen icon={<Share />} tooltipTitle="Share" />
    </SpeedDial>
  );
}

export default MuiSpeedDial;

// More suitable for mobile devices
