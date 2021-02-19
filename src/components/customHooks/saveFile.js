const toBlob = (base64File) => {
  return new Blob([base64File], { type: "text/plain" });
};

const saveFile = () => {
  return [toBlob];
};

export default saveFile;
