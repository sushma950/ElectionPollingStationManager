import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Button, Toolbar, Typography } from "@material-ui/core";

import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <AppBar >
        <Toolbar>
          <Typography variant="h5" style={{ display:"flex",flex: 3
          }}>
            Election Polling 

          </Typography>

          <Link to="/register" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="default">
              Register
            </Button>
          </Link>
         
        </Toolbar>
      </AppBar>
    </>
  );
}