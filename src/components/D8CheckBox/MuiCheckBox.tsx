import { Bookmark, BookmarkBorder } from "@mui/icons-material";
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import React, { useState } from "react";

function MuiCheckBox() {
  const [termcondition, setTermcondition] = useState<boolean>(false);
  const [skills, setSkills] = useState<string[]>([]);
  const handleChange = () => {
    setTermcondition(!termcondition);
  };

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const skillIndex = skills.indexOf(event.target.value);
    if (skillIndex === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(() => skills.filter((el, index) => index !== skillIndex));
    }
  };

  console.log("termcondition", termcondition);
  console.log("skills", skills);

  return (
    <>
      <Box>
        <FormControlLabel
          aria-label="t&c checkbox"
          label="Terms & Condition"
          control={<Checkbox size="small" color="secondary" />}
          checked={termcondition}
          onChange={handleChange}
        />
      </Box>
      {/* Use Icon as checkbox like bookmarking */}
      <Checkbox
        icon={<BookmarkBorder />}
        checkedIcon={<Bookmark />}
        checked={termcondition}
        onChange={handleChange}
      />
      <Box>
        <FormControl error>
          <FormLabel> Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value={"html"}
                  checked={skills.includes("html")}
                  onChange={handleChange1}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  value={"css"}
                  checked={skills.includes("css")}
                  onChange={handleChange1}
                />
              }
            />
            <FormControlLabel
              label="React"
              control={
                <Checkbox
                  value={"react"}
                  checked={skills.includes("react")}
                  onChange={handleChange1}
                />
              }
            />
          </FormGroup>
          <FormHelperText>Value must be checked</FormHelperText>
        </FormControl>
      </Box>
    </>
  );
}

export default MuiCheckBox;

// Notes:
// FormControlLabel used to give lable to any form component
// Checkbox used to add a checkbox in UI components
// Simple checkbox
// Icon checkbox
// Group checkbox
// Capture checkbox change event
// Handle checkbox change error message
