import React, { useState } from "react";
import { saveAs } from "file-saver";
import { getBase64 } from "./customHooks/getBase64";
import saveFile from "./customHooks/saveFile";
import changeString from "./customHooks/changeString";
import FileUploaderCard from "./UI Components/FileUploader";
import PasswordInput from "./UI Components/PasswordInput";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SaveIcon from "@material-ui/icons/Save";

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

export default function HomePage() {
  const classes = useStyles();
  const [selectedFile, setSelectedFile] = useState();
  const [selectedEncFile, setSelectedEncFile] = useState();
  const [isEncFilePicked, setIsEncFilePicked] = useState(false);
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [key, setKey] = useState("");
  const [fileTosave, setFileTosave] = useState();

  let [toBase64, base64Data, base64FileName] = getBase64();
  let [toBlob] = saveFile();
  let [encodeString, decodeString] = changeString();
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
    setFileTosave(null);
  };

  const handleSubmission = async () => {
    let data = await toBase64(selectedFile);
    let base64String = base64Data(data);
    setFileTosave({
      fileNAme: base64FileName(selectedFile.name, selectedFile.type),
      fileData: encodeString(base64String, key),
    });
  };

  const handleBase64File = () => {
    saveAs(toBlob(fileTosave.fileData), fileTosave.fileNAme);
  };

  const keychangeHandler = (e) => {
    setKey(e.target.value);
  };

  let encodeFileHandle = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsEncFilePicked(true);
  };

  const resetHandle = () => {
    setSelectedEncFile(null);
    setIsFilePicked(false);
    setFileTosave(null);
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            {" "}
            <h1>Encode File</h1>
            <PasswordInput
              password={key}
              onChangeHandlePwd={keychangeHandler}
            />
            <FileUploaderCard
              selectedFiles={selectedFile}
              setSelectedFiles={setSelectedFile}
              changeHandler={changeHandler}
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
                <div style={{ margin: "10px"}}>
                  <Button
                    variant="contained"
                    onClick={handleSubmission}
                  
                  >
                    Convert to Base64
                  </Button>
                </div>
              </div>
            ) : (
              <p>Select a file to show details</p>
            )}
            {fileTosave && (
              <div style={{ margin: "10px"}}>
                <Button
                  variant="contained"
                  onClick={handleBase64File}
                  color="primary"
                  startIcon={<SaveIcon />}
                >
                  Download Base64
                </Button>
              </div>
            )}
            {isFilePicked && (
              <div style={{ margin: "10px"}}>
                <Button
                  variant="contained"
                  onClick={resetHandle}
                  color="secondary"
                >
                  Reset
                </Button>
              </div>
            )}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            {" "}
            <h1>Decode File</h1>
            <PasswordInput
              password={key}
              onChangeHandlePwd={keychangeHandler}
            />
            <FileUploaderCard
              selectedFiles={selectedFile}
              setSelectedFiles={setSelectedFile}
              changeHandler={changeHandler}
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
                  >
                    Convert to Base64
                  </Button>
                </div>
              </div>
            ) : (
              <p>Select a file to show details</p>
            )}
            {fileTosave && (
              <div>
                <Button
                  variant="contained"
                  onClick={handleBase64File}
                  color="primary"
                >
                  Download Base64
                </Button>
              </div>
            )}
            {isFilePicked && (
              <div>
                <Button
                  variant="contained"
                  onClick={resetHandle}
                  color="secondary"
                >
                  Reset
                </Button>
              </div>
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
    // <div>

    //   <input type="file" name="file" onChange={encodeFileHandle} />
    // </div>
  );
}
