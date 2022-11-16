/* eslint-disable react/prop-types */
import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";

function TravelDepartureAutocomplete({ setAirportName }) {
  /*   APIKey in the header of the API */
  const myHeadersCity = new Headers();
  myHeadersCity.append("apikey", "S4_ycFnfXLe51IZIyjdezesd-2G0izxO");
  const requestOptionsCity = {
    method: "GET",
    headers: myHeadersCity,
    redirect: "follow",
  };

  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  const onChangeHandle = async (value) => {
    // this default api does not support searching but if you use google maps or some other use the value and post to get back you reslut and then set it using setOptions
    fetch(
      `https://api.tequila.kiwi.com/locations/query?term=${value}`,
      requestOptionsCity
    )
      .then((response) => response.json())
      .then((result) => {
        setOptions(result.locations.map((item) => `${item.code}-${item.name}`));
      })
      .catch((error) => console.warn("error", error));
  };

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="asynchronous"
      sx={{ width: 270 }}
      open={open}
      onChange={(event, newValue) => {
        setAirportName(newValue.substr(0, newValue.indexOf("-")));
      }}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option === value}
      getOptionLabel={(option) => option}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Ville de départ"
          style={{ backgroundColor: "#E4F1F3" }}
          onChange={(ev) => {
            onChangeHandle(ev.target.value);
          }}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
}

export default TravelDepartureAutocomplete;
