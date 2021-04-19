import React, { useState } from "react";
import { Paper, TextField, Typography, Button } from "@material-ui/core";
import styles from "./styles";
import { connect } from "react-redux";
import * as operations from "../../redux/auth/authOperations";
const LoginForm = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const classes = styles();
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const clearState = () => {
    setEmail("");
    setPassword("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };

    login(userData);
    clearState();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Typography className={classes.typography} variant="h2">
        Login
      </Typography>
      <Paper className={classes.paper} elevation={3}>
        <TextField
          color="primary"
          variant="outlined"
          onChange={handleEmailChange}
          required
          label="E-Mail"
          placeholder="E-Mail"
          type="email"
          value={email}
          className={classes.field}
        />
        <TextField
          color="primary"
          variant="outlined"
          onChange={handlePasswordChange}
          required
          label="Password"
          placeholder="Password"
          type="password"
          value={password}
          className={classes.field}
        />
        <Button
          type="submit"
          className={classes.btn}
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </Paper>
    </form>
  );
};
export default connect(null, {
  login: operations.login,
})(LoginForm);
