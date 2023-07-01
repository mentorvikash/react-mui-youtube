import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from "@mui/icons-material";
import { Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useState } from "react";

function MuiToggleBtn() {
  const [format, setFormat] = useState<string[]>([]);
  const [format2, setFormat2] = useState<string | null>(null);

  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string[]
  ) => {
    setFormat(updatedFormats);
  };

  const handleFormatChange2 = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: null | string
  ) => {
    setFormat2(updatedFormats);
  };
  console.log({format});
  console.log({format2});

  return (
    <Stack spacing={2}>
      <Stack direction={"row"} spacing={2}>
        <ToggleButtonGroup
          aria-label="text formating"
          value={format}
          onChange={handleFormatChange}
          size="small"
          color="success"
        >
          <ToggleButton value="bold" aria-label="">
            <FormatBold />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="">
            <FormatItalic />
          </ToggleButton>
          <ToggleButton value="underline" aria-label="">
            <FormatUnderlined />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <ToggleButtonGroup
          aria-label="text formating"
          value={format2}
          onChange={handleFormatChange2}
          size="small"
          color="success"
          orientation="vertical"
          exclusive
        >
          <ToggleButton value="bold" aria-label="">
            <FormatBold />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="">
            <FormatItalic />
          </ToggleButton>
          <ToggleButton value="underline" aria-label="">
            <FormatUnderlined />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
}

export default MuiToggleBtn;
