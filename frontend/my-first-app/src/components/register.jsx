import React, { useState } from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    marginTop: "10%",
  },
});
export default function Register() {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const handleRegister = () => {
    axios.get(
      `http://localhost:5000/user/register?email=${email}&name=${username}&password=${password}`
    )
      .then((res) => {
        console.log(res);
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <form className={classes.root}>
        <Typography variant="h3">Registration Form</Typography>
        <br />
        <br />
        <TextField
          label="DistrictName"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          variant="standard"
          required
        />
        <br />
        <br />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="standard"
          required
        />
        <br />
        <br />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="standard"
          required
        />
        <br />
        <br />
        <Button variant="contained" color="primary" onClick={handleRegister}>
          Register
        </Button>
      </form>
      <br />
      <small>{message}</small>
      <br />
      <br />
      <Link to="/login">Login</Link>
    </>
  );
}
