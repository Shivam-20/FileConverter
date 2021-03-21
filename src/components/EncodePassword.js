import { Grid, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import ButtonCom from "./UI Components/ButtonCom";
import PasswordInput from "./UI Components/InputField";
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const EncodePassword = () => {
  const classes = useStyles();
  const [key, setKey] = useState();
  const [password, setPassword] = useState();
  const keychangeHandler = (event) => {
    setKey(event.target.value);
  };
  const passwordchangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const btnHandler = (event) => {
    // setPassword(event.target.value);
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <PasswordInput
            password={key}
            onChangeHandlePwd={keychangeHandler}
            id="key"
            label="Key"
            inputType="text"
          />
        </Grid>
        <Grid item xs={3}>
          <PasswordInput
            password={password}
            onChangeHandlePwd={passwordchangeHandler}
            id="password"
            label="Passwords"
            inputType="text"
          />
        </Grid>
        <Grid item xs={3}>
          <ButtonCom
            label="Encode"
            handleClick={btnHandler}
            variant="contained"
          />
        </Grid>
      </Grid>

      {/* <PasswordInput
        password={password}
        onChangeHandlePwd={passwordchangeHandler}
        id="password"
        label="Passwords"
        inputType="text"
      /> */}
    </div>
  );
};

export default EncodePassword;
