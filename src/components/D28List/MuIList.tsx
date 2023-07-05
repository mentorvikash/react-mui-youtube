// Display data as list in material UI

import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  Divider,
  ListItemButton,
} from "@mui/material";
import { Mail } from "@mui/icons-material";

function MuiList() {
  return (
    <Box width={"400px"} bgcolor="efefef">
      <List>
        <ListItem disablePadding color="success">
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <Mail />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="Primary text" secondary="secondary text" />
          </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <Mail />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>

          <ListItemText primary="Primary text" secondary="secondary text" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <Mail />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>

          <ListItemText primary="Primary text" secondary="secondary text" />
        </ListItem>
      </List>
    </Box>
  );
}

export default MuiList;
