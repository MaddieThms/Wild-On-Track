import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CardTrip from "./Cardtrip";

const Item = styled(Paper)(() => ({
  width: "90vw",
  textAlign: "center",
  height: "25vh",
}));

const Gridcenter = styled(Paper)(() => ({
  margin: "0 auto",
}));

export default function BasicGrid() {
  return (
    <Box marginTop={3}>
      <Grid container>
        <Gridcenter elevation={0}>
          <Grid item marginBottom={20}>
            <Item>
              <CardTrip />
            </Item>
          </Grid>
          <Grid item marginBottom={20}>
            <Item>
              <CardTrip />
            </Item>
          </Grid>
          <Grid item marginBottom={20}>
            <Item>
              <CardTrip />
            </Item>
          </Grid>
          <Grid item marginBottom={20}>
            <Item>
              <CardTrip />
            </Item>
          </Grid>
        </Gridcenter>
      </Grid>
    </Box>
  );
}
