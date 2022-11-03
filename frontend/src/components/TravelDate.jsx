/* eslint-disable react/prop-types */
import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// eslint-disable-next-line no-unused-vars
export default function BasicDatePicker({ dateFrom, setDateFrom }) {
  const [value, setValue] = React.useState(null);

  return (
    <div>
      <p>Date de départ</p>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className="label-form"
          label="Basic example"
          inputFormat="DD/MM/YYYY"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            setDateFrom(`${newValue.$D}/${newValue.$M + 1}/${newValue.$y}`);
            // console.log(`${newValue.$D}/${newValue.$M + 1}/${newValue.$y}`);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
}
