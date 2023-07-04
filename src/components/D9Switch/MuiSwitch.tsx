import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Switch,
} from "@mui/material";
import React, { useState } from "react";

function MuiSwitch() {
  const [value, setValue] = useState<Boolean>(false);
  const [skills, setSkills] = useState<string[]>([]);

  const handleChange = () => {
    setValue(!value);
  };

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const indexOfValue = skills.indexOf(event.target.value);
    if (indexOfValue === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(() => skills.filter((el, index) => index !== indexOfValue));
    }
  };

  console.log("value", value);
  console.log("skills", skills);

  return (
    <Box gap={2}>
      <Box>
        <FormControlLabel
          label="Switch"
          control={<Switch value={value} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Group Switch</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="HTML"
              control={
                <Switch
                  value={"html"}
                  onChange={handleChange1}
                  checked={skills.includes("html")}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Switch
                  value={"css"}
                  onChange={handleChange1}
                  checked={skills.includes("css")}
                />
              }
            />
            <FormControlLabel
              label="REACT"
              control={
                <Switch
                  value={"react"}
                  onChange={handleChange1}
                  checked={skills.includes("react")}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
}

export default MuiSwitch;
