import React, { useState } from "react";
import handleTextFile from "./customHooks/handleTextFile";
import changeString from "./customHooks/changeString";
import saveFile from "./customHooks/saveFile";
import filetype from "../utils/filetype";

const DecodeFile = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [key, setKey] = useState(false);
  let [readTestFile, getFileType, getFileName] = handleTextFile();
  let [encodeString, decodeString] = changeString();
  let [toBlob, generateFile] = saveFile();

  const changeHandler = async (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = async () => {
    let file = await readTestFile(selectedFile);
    let mimeType = filetype(getFileType(selectedFile.name));
    // console.log(mimeType);
    let decodebase64 = await decodeString(file, key);
    // // getFileType(selectedFile.name);
    generateFile(
      decodebase64,
      getFileName(selectedFile.name, getFileType(selectedFile.name)),
      mimeType
    );
  };

  const keychangeHandler = (event) => {
    setKey(event.target.value);
  };

  return (
    <div>
      <h1>Decode File</h1>
      <input type="password" name="key" onChange={keychangeHandler} />
      <input type="file" name="file" onChange={changeHandler} />
      {isFilePicked ? (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>Filetype: {selectedFile.type}</p>
          <p>Size in bytes: {selectedFile.size}</p>
          <p>
            lastModifiedDate:
            {selectedFile.lastModifiedDate.toLocaleDateString()}
          </p>
        </div>
      ) : (
        <p>Select a file to show details</p>
      )}
      <div>
        <button onClick={handleSubmission}>Convert</button>
      </div>

      <div>{/* <button onClick={handleBase64File}>Download</button> */}</div>
    </div>
  );
};

export default DecodeFile;
