import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import DecodeFile from "./DecodeFile";
import EncodeFile from "./EncodeFile";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

export default function HomePage() {
  const classes = useStyles();
  const [toggle, setToggle] = useState(true);
  const handleChange = (event) => {
    setToggle(event.target.checked);
  };

  return (
    <div className={classes.root}>
      <Switch
        checked={toggle}
        onChange={handleChange}
        name="toggle"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {toggle ? <EncodeFile /> : <DecodeFile />}
        </Grid>
      </Grid>
    </div>
  );
}
