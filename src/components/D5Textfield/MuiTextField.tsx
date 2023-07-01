import { InputAdornment, Stack, TextField } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import React, { useState } from "react";

function MuiTextField() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  console.log(email);
  return (
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={2}>
        <TextField variant="outlined" label="outlined" />
        <TextField variant="filled" label="filled" />
        <TextField variant="standard" label="standard" />
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField label="name" value="" size="small" />
        <TextField label="password" value="" type="password" size="small" />
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField
          label="Unique Token"
          value=""
          required
          helperText="Dont share Unique Token to anyone"
        />
        <TextField label="disabled" value="" disabled />
        <TextField
          label="Read only"
          value="Read only field"
          inputProps={{ readOnly: true }}
        />
      </Stack>

      <Stack direction={"row"} spacing={2}>
        <TextField
          label="price"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">$ </InputAdornment>
            ),
          }}
        />
        <TextField
          label="weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>

      {/* Practical email and password handling  */}
      <Stack direction={"row"} spacing={2}>
        <TextField
          label="Email"
          value={email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(event?.target.value)
          }
          error={!email}
          required
          helperText={!email ? "required" : "Use this to login"}
        />
        <TextField
          label="password"
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
          type={isVisible ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {isVisible ? (
                  <VisibilityIcon onClick={() => setIsVisible(false)} />
                ) : (
                  <VisibilityOffIcon onClick={() => setIsVisible(true)} />
                )}
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
}

export default MuiTextField;
