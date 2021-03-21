import { Grid, makeStyles, Paper } from "@material-ui/core";
import React, { useState } from "react";
import ButtonCom from "./UI Components/ButtonCom";
import PasswordInput from "./UI Components/InputField";
import useEncodeString from "./customHooks/encodeString";
import { getBase64 } from "./customHooks/getBase64";
import _ from "lodash";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const EncodePassword = () => {
  const classes = useStyles();
  const [key, setKey] = useState("");
  const [password, setPassword] = useState("");
  const [encodedPassword, setEncodedPassword] = useState("");
  let [, , , string2Base64] = getBase64();
  let [encodeString] = useEncodeString();
  const keychangeHandler = (event) => {
    setKey(event.target.value);
  };
  const passwordchangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const btnHandler = () => {
    let base64String = string2Base64(password);
    let encodedString = encodeString(base64String, key);
    setEncodedPassword(encodedString);
    // setPassword(event.target.value);
  };

  const copyHandler = () => {
    navigator.clipboard.writeText(encodedPassword);
  };
  return (
    <Paper className={classes.root}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12}>
          <PasswordInput
            password={key}
            onChangeHandlePwd={keychangeHandler}
            id="key"
            label="Key"
            inputType="text"
          />
        </Grid>
        <Grid item xs={12}>
          <PasswordInput
            password={password}
            onChangeHandlePwd={passwordchangeHandler}
            id="password"
            label="Passwords"
            inputType="text"
          />
        </Grid>
        <Grid item xs={12}>
          <PasswordInput
            password={encodedPassword}
            onChangeHandlePwd={() => {}}
            id="encodedPassword"
            label="Encoded Password"
            inputType="text"
            disabled={true}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center" alignItems="center" spacing={3}>
            <Grid item xs={6}>
              <ButtonCom
                label="Encode"
                handleClick={btnHandler}
                variant="contained"
              />
            </Grid>
            <Grid item xs={6}>
              <ButtonCom
                label="Copy"
                handleClick={copyHandler}
                variant="contained"
                disabled={_.isEmpty(encodedPassword)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default EncodePassword;
