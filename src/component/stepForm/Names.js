import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
export const Names = ({ formData, setForm, navigation }) => {
  const { firstName, lastName } = formData;
 
  return (
    <Container maxWidth="xs">
      <h3>Names</h3>
      <TextField
        label="First Name"
        name="firstName"
        value={firstName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Last Name"
        name="lastName"
        value={lastName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <button
        variant="contained"
        color="primary"
        style={{ marginTop: "1rem" }}
        fullWidth
        onClick={() => navigation.next()}
      >
        Next
      </button>
    </Container>
  );
};
