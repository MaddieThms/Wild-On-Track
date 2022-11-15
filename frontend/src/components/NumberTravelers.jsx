/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function NumberTravelers({ numberTraveler, setNumberTraveler }) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          className="label-form"
          id="filled-search"
          label="Nombre de voyageurs"
          type="search"
          variant="outlined"
          value={numberTraveler}
          onChange={(event) => setNumberTraveler(event.target.value)}
        />
      </div>
    </Box>
  );
}

export default NumberTravelers;
