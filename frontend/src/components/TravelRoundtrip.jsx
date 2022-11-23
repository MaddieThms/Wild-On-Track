/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function BasicDatePickerRoundTrip({
  returnFrom,
  setReturnFrom,
}) {
  const [value, setValue] = React.useState(null);

  return (
    <div>
      <LocalizationProvider className="DatePicker" dateAdapter={AdapterDayjs}>
        <DatePicker
          className="label-form"
          label="Date de retour"
          inputFormat="DD/MM/YYYY"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            setReturnFrom(`${newValue.$D}/${newValue.$M + 1}/${newValue.$y}`);
          }}
          renderInput={(params) => (
            <TextField sx={{ width: 270 }} {...params} />
          )}
        />
      </LocalizationProvider>
    </div>
  );
}
