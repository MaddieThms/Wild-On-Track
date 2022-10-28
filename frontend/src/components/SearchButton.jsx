import React from "react";
import { Button, Stack } from "@mui/material";
import "./SearchButton.css";

function SearchButton() {
  return (
    <Stack spacing={2} direction="row">
      <Button className="searchButton" variant="contained">
        Contained
      </Button>
    </Stack>
  );
}

export default SearchButton;
