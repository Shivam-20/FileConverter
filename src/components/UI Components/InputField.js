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

export default function PasswordInput({
  password,
  onChangeHandlePwd,
  id,
  label,
  inputType,
  ...rest
}) {
  const classes = useStyles();
  // console.log(rest);
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id={id}
          label={label}
          type={inputType}
          value={password}
          onChange={onChangeHandlePwd}
          {...rest}
        />
      </div>
    </form>
  );
}
