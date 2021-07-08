
//return file of string 
const toBlob = (base64File) => {
  return new Blob([base64File], { type: "text/plain" });
};
let generateFile = (content, fileName, fileType) => {
  // console.log(fileType);
  const fileData = `data:${fileType};base64,${content}`;
  const downloadLink = document.createElement("a");
  downloadLink.href = fileData;
  downloadLink.download = fileName;
  downloadLink.click();
};
const saveFile = () => {
  return [toBlob,generateFile];
};

export default saveFile;
