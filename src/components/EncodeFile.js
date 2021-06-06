import React, { useState } from "react";
import { saveAs } from "file-saver";
import { getBase64 } from "./customHooks/getBase64";
import saveFile from "./customHooks/saveFile";
import useEncodeString from "./customHooks/encodeString";
import FileUploaderCard from "./UI Components/FileUploader";
import PasswordInput from "./UI Components/InputField";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import SaveIcon from "@material-ui/icons/Save";
import SnackBar from "./UI Components/SnackBar";

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

const EncodeFile = () => {
  const classes = useStyles();
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [key, setKey] = useState("");
  const [fileTosave, setFileTosave] = useState();
  const [error, setError] = useState(null);
  const [openSnackbar, setOpenSnackBar] = useState(false);
  // const [spinner, setSpinner] = useState(true);

  let [toBase64, base64Data, base64FileName] = getBase64();
  let [toBlob] = saveFile();
  let [encodeString, decodeString] = useEncodeString();
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
    setFileTosave(null);
  };

  const handleSubmission = async () => {
    try {
      let data = await toBase64(selectedFile);
      let base64String = base64Data(data);
      setFileTosave({
        fileNAme: base64FileName(selectedFile.name, selectedFile.type),
        fileData: encodeString(base64String, key),
      });
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setOpenSnackBar(true);
    }
  };

  const handleBase64File = () => {
    saveAs(toBlob(fileTosave.fileData), fileTosave.fileNAme);
  };

  const keychangeHandler = (e) => {
    setKey(e.target.value);
  };

  const resetHandle = () => {
    setIsFilePicked(false);
    setFileTosave(null);
    setKey("");
  };
  return (
    <>
      <Paper className={classes.paper}>
        <h1>Encode File</h1>
        <PasswordInput
          password={key}
          onChangeHandlePwd={keychangeHandler}
          id="encodeKey"
          label="Passwords"
          inputType="password"
        />
        <FileUploaderCard
          selectedFiles={selectedFile}
          setSelectedFiles={setSelectedFile}
          changeHandler={changeHandler}
          id="encodeFile"
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
            <div style={{ margin: "10px" }}>
              <Button variant="contained" onClick={handleSubmission}>
                Process File
              </Button>
            </div>
          </div>
        ) : (
          <p>Select a file to show details</p>
        )}
        {fileTosave && (
          <div style={{ margin: "10px" }}>
            <Button
              variant="contained"
              onClick={handleBase64File}
              color="primary"
              startIcon={<SaveIcon />}
            >
              Download Encode file
            </Button>
          </div>
        )}
        {isFilePicked && (
          <div style={{ margin: "10px" }}>
            <Button variant="contained" onClick={resetHandle} color="secondary">
              Reset
            </Button>
          </div>
        )}
      </Paper>
      {error ? (
        <SnackBar
          openSnackBar={openSnackbar}
          setOpenSnackBar={setOpenSnackBar}
          message={error}
        />
      ) : null}
      {/* {spinner ? <Spinner /> : null} */}
    </>
  );
};

export default EncodeFile;
