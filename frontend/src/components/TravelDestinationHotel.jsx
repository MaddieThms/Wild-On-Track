/* eslint-disable react/prop-types */
import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";

function TravelDestinationHotel({ setCityId }) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  const optionsCityHôtels = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "05405b3854mshd5944f4020e59b0p126d9fjsn1f22ffcff455",
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };

  const onChangeHandle = async (value) => {
    // this default api does not support searching but if you use google maps or some other use the value and post to get back you reslut and then set it using setOptions
    fetch(
      `https://travel-advisor.p.rapidapi.com/locations/search?query=${value}&limit=10&offset=0&units=km&location_id=1&currency=EUR&sort=relevance`,
      optionsCityHôtels
    )
      .then((response) => response.json())
      .then((result) => {
        setOptions(
          result.data.map(
            (item) =>
              `${item.result_object.location_id}/${item.result_object.location_string}`
          )
        );
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
        setCityId(newValue.substr(0, newValue.indexOf("/")));
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
          label="Ville"
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

export default TravelDestinationHotel;
