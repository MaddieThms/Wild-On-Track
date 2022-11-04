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
      <h3 style={{ marginLeft: "35vw", marginBottom: "10vw" }}>Mes notes</h3>
      <Box
        display="flex"
        justifyContent="center"
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "80vw", margin: "0 auto" },
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
