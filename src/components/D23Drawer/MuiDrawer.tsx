import React, { useState } from "react";
import { Box, Drawer, Typography, IconButton } from "@mui/material";
import { MenuBook } from "@mui/icons-material";

function MuiDrawer() {
  const [isOpen, setIsOpen] = useState<true | undefined>(undefined);

  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <>
      <IconButton size="large" aria-label="button" edge="start" color="inherit"  onClick={handleOpen}>
        <MenuBook />
      </IconButton>
      <Drawer open={isOpen} anchor="right" onClose={() => setIsOpen(undefined)}>
        <Box width={200} px={5} pt={3}>
          <Typography gutterBottom variant="h5">
            React
          </Typography>
          <Typography color={"text.secondary"}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            labore, officia voluptatem obcaecati sed consequuntur quam modi
            numquam, mollitia, amet sint fugit tempora minus nesciunt. Aut
            ducimus eius labore beatae nostrum, veniam qui laboriosam iste iure
            accusamus nam obcaecati esse, temporibus dolores quaerat eveniet
            quam suscipit, eaque possimus in ullam!{" "}
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}

export default MuiDrawer;
