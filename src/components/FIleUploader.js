import React, { useState } from "react";
import { saveAs } from "file-saver";
import { getBase64 } from "./customHooks/getBase64";
import saveFile from "./customHooks/saveFile";
import changeString from "./customHooks/changeString";

export default function FIleUploader() {
  const [selectedFile, setSelectedFile] = useState();
  const [selectedEncFile, setSelectedEncFile] = useState();
  const [isEncFilePicked, setIsEncFilePicked] = useState(false);
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [key, setKey] = useState();
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
    setIsEncFilePicked(false);
  };
  return (
    <div>
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
        <button onClick={handleSubmission}>Convert to Base64</button>
      </div>
      {fileTosave && (
        <div>
          <button onClick={handleBase64File}>Download Base64</button>
        </div>
      )}
      {isFilePicked && (
        <div>
          <button onClick={resetHandle}>Reset</button>
        </div>
      )}
      <input type="file" name="file" onChange={encodeFileHandle} />
    </div>
  );
}
