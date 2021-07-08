import React, { useState } from "react";
import handleTextFile from "./customHooks/handleTextFile";
import useEncodeString from "./customHooks/encodeString";
import saveFile from "./customHooks/saveFile";
import filetype from "../utils/filetype";
import { Button, makeStyles, Paper } from "@material-ui/core";
import PasswordInput from "./UI Components/InputField";
import FileUploaderCard from "./UI Components/FileUploader";
import Snackbar from "./UI Components/SnackBar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  btn: {
    "& .MuiButtonBase-root": {
      margin: "10px",
    },
  },
}));

const DecodeFile = () => {
  const classes = useStyles();
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [key, setKey] = useState("");
  const [readTextFile, getFileType, getFileName] = handleTextFile();
  const [encodeString, decodeString] = useEncodeString();
  const [toBlob, generateFile] = saveFile();
  const [error, setError] = useState(null);
  const [openSnackbar, setOpenSnackBar] = useState(false);

  //called on file upload
  const changeHandler = (event) => {
    console.log(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  //called on decrypt button
  const handleSubmission = async () => {
    try {
      let file = await readTextFile(selectedFile);
      let mimeType = filetype(getFileType(selectedFile.name));
      let decodedbase64 = await decodeString(file, key);
      generateFile(
        decodedbase64,
        getFileName(selectedFile.name, getFileType(selectedFile.name)),
        mimeType
      );
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setOpenSnackBar(true);
    }
  };

  //set file password
  const keychangeHandler = (event) => {
    setKey(event.target.value);
  };

  return (
    <>
      <div>
        <Paper className={classes.paper}>
          <h1>Decrypt File</h1>
          <PasswordInput
            password={key}
            onChangeHandlePwd={keychangeHandler}
            id="decodeKey"
            label="Passwords"
            inputType="password"
          />
          <FileUploaderCard
            selectedFiles={selectedFile}
            setSelectedFiles={setSelectedFile}
            changeHandler={changeHandler}
            id="decodeFile"
          />
          {isFilePicked ? (
            <div>
              <p>Filename: {selectedFile.name}</p>
              <p>Filetype: {selectedFile.type}</p>
              <p>Size in bytes: {selectedFile.size}</p>
              <p>
                lastModifiedDate:
                {selectedFile.lastModifiedDate.toLocaleDateString()}
              </p>
              <div>
                <Button
                  variant="contained"
                  onClick={handleSubmission}
                  styles={{ margin: "10px" }}
                  color="primary"
                >
                  Decrypt File
                </Button>
              </div>
            </div>
          ) : (
            <p>Select a file to show details</p>
          )}
        </Paper>
      </div>
      {error ? (
        <Snackbar
          openSnackBar={openSnackbar}
          setOpenSnackBar={setOpenSnackBar}
          message={error}
        />
      ) : null}
    </>
  );
};

export default DecodeFile;
