import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function InputField({ value, onChangeHandler, id, fType }) {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id={id}
          label="Passcode"
          type={fType}
          value={value}
          onChange={onChangeHandler}
        />
      </div>
    </form>
  );
}
