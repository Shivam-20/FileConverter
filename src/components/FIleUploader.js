import React, { useState } from "react";
import { saveAs } from "file-saver";

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export default function FIleUploader() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [base64File, setBase64File] = useState();
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {
    toBase64(selectedFile)
      .then((file) => {
        setBase64File(file.split(",")[1]);
      })
      .catch((error) => console.log(error));
  };

  const handleBase64File = () => {
    const blob = new Blob([base64File], { type: "text/plain" });
    const fileName =
      selectedFile.name.split(".")[0] +
      "_" +
      selectedFile.type.split("/")[1] +
      ".txt";
    saveAs(blob, fileName);
  };

  return (
    <div>
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
      {base64File && (
        <div>
          <button onClick={handleBase64File}>Download Base64</button>
        </div>
      )}
    </div>
  );
}
