/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function NumberNightsHotel({ numberNightsHotel, SetNumberNightsHotel }) {
  return (
    <Box component="form" noValidate autoComplete="off">
      <div>
        <TextField
          className="label-form"
          sx={{ width: 270 }}
          id="filled-search"
          label="Nombre de nuits"
          type="search"
          variant="outlined"
          value={numberNightsHotel}
          onChange={(event) => SetNumberNightsHotel(event.target.value)}
        />
      </div>
    </Box>
  );
}

export default NumberNightsHotel;
