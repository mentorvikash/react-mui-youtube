import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
  TimelineOppositeContent,
} from "@mui/lab";
import { Box } from "@mui/material";
import React from "react";

function MuiTimeLine() {
  return (
    <Timeline position="alternate" >
      <TimelineItem>
        <TimelineOppositeContent color={"text.secondary"}>9:30 Am</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" variant="outlined"  />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>CITY A</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color={"text.secondary"}>10:00 Am</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
  
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>CITY B</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color={"text.secondary"}>10:30 Am</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
        </TimelineSeparator>
        <TimelineContent>CITY C</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default MuiTimeLine;
