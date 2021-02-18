const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const base64Date = (string) => {
  return string.split(",")[1];
};
const base64FileName = (originalName, originalType) => {
  return originalName.split(".")[0] + "_" + originalType.split("/")[1] + ".txt";
};
export const getBase64 = () => {
  return [toBase64, base64Date, base64FileName];
};
