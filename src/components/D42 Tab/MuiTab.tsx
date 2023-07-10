import React, { useState } from "react";
import { Tab, Box } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

function MuiTab() {
  const [value, setValue] = useState<string>("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  };

  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderColor: "divider", borderBottom: 1 }}>
          <TabList
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab label="Tab 1" value="1" />
            <Tab label="Tab 2" value="2" />
            <Tab label="Tab 3" value="3" />
            <Tab label="Tab 4" value="4" />
          </TabList>
        </Box>
        <TabPanel aria-label="panel-button" value="1" >Panel 1 text to render</TabPanel>
        <TabPanel aria-label="panel-button" value="2" >Panel 2 text to render</TabPanel>
        <TabPanel aria-label="panel-button" value="3" >Panel 3 text to render</TabPanel>
        <TabPanel aria-label="panel-button" value="4" >Panel 4 text to render</TabPanel>
      </TabContext>
    </Box>
  );
}

export default MuiTab;
