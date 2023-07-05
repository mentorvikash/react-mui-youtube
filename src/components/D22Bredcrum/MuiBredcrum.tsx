import React from "react";
import { Box, Breadcrumbs, Typography, Link } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";

function MuiBredcrum() {
  return (
    <Box>
      <Breadcrumbs
        aria-label="breadcrum"
        separator={<NavigateNext />}
        maxItems={2}
        itemsAfterCollapse={2}
      >
        <Link underline="none" href="#">
          Dashboard
        </Link>
        <Link underline="none" href="#">
          Product
        </Link>
        <Link underline="none" href="#">
          Shirt
        </Link>
        <Typography color={"text.primary"}>xyz-shirt</Typography>
      </Breadcrumbs>
      <Breadcrumbs
        aria-label="breadcrum"
        separator={<NavigateNext />}
        maxItems={2}
        itemsBeforeCollapse={2}
      >
        <Link underline="none" href="#">
          Dashboard
        </Link>
        <Link underline="none" href="#">
          Product
        </Link>
        <Link underline="none" href="#">
          Shirt
        </Link>
        <Typography color={"text.primary"}>xyz-shirt</Typography>
      </Breadcrumbs>

    </Box>
  );
}

export default MuiBredcrum;
