import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function TravelDestination(props) {
  // eslint-disable-next-line react/prop-types
  const { landing, setLanding } = props;
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
          value={landing}
          onChange={(event) => setLanding(event.target.value)}
        />
      </div>
    </Box>
  );
}
export default TravelDestination;
