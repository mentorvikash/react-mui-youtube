import { Autocomplete, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

interface IOption {
  id: number;
  label: string;
}

function MuiAutoComplete() {
  const [value, setValue] = useState<string | null>(null);
  const [skills, setSkills] = useState<IOption | null>(null);

  const optionValue = ["html", "json", "css", "react", "node"];

  const optionObject: IOption[] = optionValue.map((option, index) => ({
    id: index + 1,
    label: option,
  }));

  console.log({ optionObject });
  console.log({ skills });

  return (
    <Stack spacing={2} width={"250px"}>
      <Autocomplete
        options={optionValue}
        renderInput={(params) => <TextField {...params} label="Select Tech" />}
        value={value}
        onChange={(event: any, newValue: string | null) => setValue(newValue)}
        freeSolo
      />
      <Autocomplete
        options={optionObject}
        // getOptionLabel={(option) => option.label}
        renderInput={(params) => <TextField {...params} label="Select Tech" />}
        value={skills}
        onChange={(event: any, newValue: IOption | null) => setSkills(newValue)}
      />
    </Stack>
  );
}

export default MuiAutoComplete;
