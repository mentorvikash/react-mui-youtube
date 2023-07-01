import { MenuItem, TextField, Stack, Box } from "@mui/material";
import React, { useState } from "react";

function MuiSelect() {
  const [country, setCountry] = useState<string>("");
  const [countries, setCountries] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(() => (typeof value === "string" ? value.split(",") : value));
  };
  console.log("country", country);
  console.log("country", countries);

  return (
    <Stack spacing={4}>
      <Box width="250px">
        <TextField
          label="Select county"
          value={country}
          select
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="GR">Germany</MenuItem>
          <MenuItem value="US">USA</MenuItem>
        </TextField>
      </Box>

      <Box width="250px" display={"block"}>
        <TextField
          label="Select countries"
          value={countries}
          select
          onChange={handleChange1}
          fullWidth
          SelectProps={{ multiple: true }}
          size="small"
          helperText="Please select your country"
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="GR">Germany</MenuItem>
          <MenuItem value="US">USA</MenuItem>
        </TextField>
      </Box>
    </Stack>
  );
}

export default MuiSelect;
