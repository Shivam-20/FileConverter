const readTestFile = (file) =>
  new Promise((resolve, reject) => {
    var fr = new FileReader();
    fr.onload = function () {
      resolve(fr.result);
    };
    fr.readAsText(file);
  });

const getFileType = (fileType) => {
  return fileType
    .split("_")
    [fileType.split("_").length - 1].replace(/\s+/g, "")
    .split(".")[0]
    .replace(/[^a-z1-9\s]+/gi, "");
};

const getFileName = (oldFileName, extension) => {
  console.log(extension)
  return oldFileName.split(extension)[0];
};

const handleTextFile = () => {
  return [readTestFile, getFileType, getFileName];
};

export default handleTextFile;
