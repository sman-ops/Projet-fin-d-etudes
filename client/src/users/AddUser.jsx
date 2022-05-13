import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import CardHeader from "@mui/material/CardHeader";
import InputLabel from "@mui/material/InputLabel";

import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";

import Select from "@mui/material/Select";

function AddUser() {
  return (
    <Card
      style={{
        width: "80%",
        marginTop: "3%",
        marginLeft: "10%",
        boxShadow: "  0px 10px 20px rgb(200 208 216 / 30%);",
        borderRadius: "10px",
      }}
    >
      <CardHeader
        title="Add new user"
        titleTypographyProps={{ variant: "h6" }}
      />
      <Divider sx={{ margin: 0 }} />
      <form onSubmit={(e) => e.preventDefault()}>
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                1. Account Details
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Username"
                required
                placeholder="carterLeonard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="email"
                label="Email"
                placeholder="carterleonard@gmail.com"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="form-layouts-separator-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  label="Password"
                  id="form-layouts-separator-password"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="form-layouts-separator-password-2">
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  label="Confirm Password"
                  id="form-layouts-separator-password-2"
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Divider sx={{ marginBottom: 0 }} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                2. Personal Info
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="First Name" placeholder="Leonard" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Last Name" placeholder="Carter" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="form-layouts-separator-select-label">
                  Country
                </InputLabel>
                <Select
                  label="Country"
                  defaultValue=""
                  id="form-layouts-separator-select"
                  labelId="form-layouts-separator-select-label"
                >
                  <MenuItem value="UK">UK</MenuItem>
                  <MenuItem value="USA">USA</MenuItem>
                  <MenuItem value="Australia">Australia</MenuItem>
                  <MenuItem value="Germany">Germany</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="form-layouts-separator-select-label">
                  Langage
                </InputLabel>
                <Select
                  label="Country"
                  defaultValue=""
                  id="form-layouts-separator-select"
                  labelId="form-layouts-separator-select-label"
                >
                  <MenuItem value="UK">UK</MenuItem>
                  <MenuItem value="USA">USA</MenuItem>
                  <MenuItem value="Australia">Australia</MenuItem>
                  <MenuItem value="Germany">Germany</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone No."
                placeholder="+1-123-456-8790"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider sx={{ margin: 0 }} />
        <CardActions>
          <Button
            style={{ width: "25%", height: "50px" }}
            type="submit"
            sx={{ mr: 2 }}
            variant="contained"
          >
            Submit
          </Button>
          <Button
            style={{ width: "25%", height: "50px" }}
            color="secondary"
            variant="outlined"
          >
            Cancel
          </Button>
        </CardActions>
      </form>
    </Card>
  );
}

export default AddUser;
