import React, {useState} from "react";
import { Button, TextField, Typography } from "@material-ui/core";

import axios from "axios";
import { Link} from "react-router-dom";

function Login(){
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    
  
    const handleLogin = () => {
      axios.get(
        `http://localhost:5000/user/login?email=${email}&password=${password}`
      )
        .then((res) => {
          console.log(res);
          setMessage(res.data.message);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  return(
    <div>
       <form>
        <Typography variant="h2">Login Page</Typography>
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
        <Button variant="contained" color="primary" onClick={handleLogin}>
        <Link to="/">Login</Link>
        </Button>
      </form>
      {message}
    <Link to="/register">Register</Link>
    </div>
  )
}

export default Login