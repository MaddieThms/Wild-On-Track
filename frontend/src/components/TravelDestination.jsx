import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function TravelDestination() {
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
        <p>Choisi ta destination</p>
        <TextField
          className="label-form"
          id="filled-search"
          label="Search field"
          type="search"
          variant="outlined"
        />
      </div>
    </Box>
  );
}

export default TravelDestination;
