import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";

export default function DataNote() {
  return (
    <div className="titlesfavorite">
      <h5>Mes notes</h5>
      <Box
        display="flex"
        justifyContent="center"
        component="form"
        sx={{
          "& .MuiTextField-root": {
            m: 1,
            width: "90vw",
            margin: "0 auto",
            mt: 3,
            mb: 3,
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          sx={{ backgroundColor: "#E4F1F3" }}
          id="outlined-multiline-static"
          label={<EditIcon text="dd" fontSize="large" />}
          placeholder="Mes notes de voyages"
          multiline
          maxRows={12}
          minRows={5}
          color="warning"
        />
      </Box>
    </div>
  );
}
