import React, { useState } from "react";
import { Stack, Chip, TextField, Avatar } from "@mui/material";
import { Close, Face } from "@mui/icons-material";

function MuiChip() {
  const [array, setArray] = useState<string[]>(["body", "cow", "goat", "cat"]);

  const handleDelete = (clipToDelete: string) => {
    const newarray = array.filter((el) => el !== clipToDelete);
    setArray(newarray);
  };

  return (
    <Stack direction={"row"} spacing={2} alignItems={"center"}>
      <Chip label="tag1"></Chip>
      <Chip label="tag1" color="secondary"></Chip>
      <Chip label="tag1" color="secondary" size="small"></Chip>
      <Chip
        label="tag1"
        color="secondary"
        size="small"
        deleteIcon={<Close />}
      ></Chip>
      <Chip icon={<Face />} label="say hi" variant="outlined" color="primary" />
      <Chip
        avatar={<Avatar>VS</Avatar>}
        label="say hi"
        variant="outlined"
        color="primary"
      />

      <Chip
        label="tag1"
        color="secondary"
        size="small"
        deleteIcon={<Close />}
        onDelete={() => alert("clip request for delete")}
        onClick={() => alert("Clip got clicked")}
      ></Chip>
      <Stack direction={"row"}>
        {array.map((chip, index) => (
          <Chip
            key={index}
            color="info"
            label={chip}
            size="small"
            deleteIcon={<Close />}
            onDelete={() => handleDelete(chip)}
            onClick={() => alert("I got clicked")}
          />
        ))}
      </Stack>
    </Stack>
  );
}

export default MuiChip;
