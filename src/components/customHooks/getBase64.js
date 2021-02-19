const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const base64Data = (string) => {
  return string.split(",")[1];
};
const base64FileName = (originalName, originalType) => {
  return originalName.split(".")[0] + "_" + originalType.split("/")[1] + ".txt";
};
export const getBase64 = () => {
  return [toBase64, base64Data, base64FileName];
};
