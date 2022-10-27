import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import React from "react";
import "./Formulaire.css";

function handleSubmit(e) {
  e.preventDefault();
  alert("Message Envoyé");
}

function Form() {
  return (
    <div>
      <Card>
        <CardContent>
          <form className="form">
            <Grid className="container-label" container spacing={3}>
              <Grid xs={12} item>
                <TextField
                  className="label-form"
                  label="Name"
                  placeholder="Enter your name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid className="container-label" xs={12} item>
                <TextField
                  className="label-form"
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid className="container-label" xs={12} item>
                <TextField
                  className="label-form"
                  type="number"
                  label="Phone"
                  placeholder="Enter Phone number"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid className="container-label" xs={12} item>
                <TextField
                  className="label-form"
                  label="Message"
                  multiline
                  rows={4}
                  placeholder="Your Message"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Button
                onClick={handleSubmit}
                type="submit"
                className="button-form"
                variant="contained"
              >
                Envoyer
              </Button>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Form;
