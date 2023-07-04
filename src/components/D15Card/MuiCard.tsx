import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

function MuiCard() {
  return (
    <div>
      <Box width={"300px"}>
        <Card>
          <CardMedia
            component={"img"}
            height='140'
            image="https://source.unsplash.com/random/300x201"
            alt="unsplash image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              React
            </Typography>
            <Typography variant="body2" color={"GrayText"}>
              The React.js framework is an open-source JavaScript framework and
              library developed by Facebook. It’s used for building interactive
              user interfaces and web applications quickly and efficiently with
              significantly less code than you would with vanilla JavaScript.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size={"small"}>Share</Button>
            <Button size={"small"}>Read More</Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}

export default MuiCard;
