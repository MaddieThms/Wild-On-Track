import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";

export default function DataNote() {
  //   const [value, setValue] = React.useState("Controlled");

  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setValue(event.target.value);
  //   };
  return (
    <div>
      <h3 style={{ marginLeft: "10px" }}>Mes notes</h3>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "95vw" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
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
        </div>
      </Box>
    </div>
  );
}
