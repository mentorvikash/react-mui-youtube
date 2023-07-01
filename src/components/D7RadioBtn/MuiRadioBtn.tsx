import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material";
import React, { useState } from "react";

function MuiRadioBtn() {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  console.log("value", value);
  
  return (
    <Box>
      <FormControl error >
        <FormLabel id="job-experience-group-label">
          Years of experience
        </FormLabel>
        <RadioGroup
          name="job experience group"
          aria-label="job-experience-group-label"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel
            control={<Radio color="secondary" />}
            label="0-2"
            value="0-2"
          />
          <FormControlLabel
            control={<Radio size="small" />}
            label="2-4"
            value="2-4"
          />
          <FormControlLabel control={<Radio />} label="4-8" value="4-8" />
        </RadioGroup>
        <FormHelperText>this will help to render error message</FormHelperText>
      </FormControl>
    </Box>
  );
}

export default MuiRadioBtn;
