import CryptoJS from "crypto-js";

const encodeString = (string, key) => {
  return CryptoJS.AES.encrypt(string, key);
};
const decodeString = (string, key) => {
  const decodeString = CryptoJS.AES.decrypt(string, key);
  return decodeString.toString(CryptoJS.enc.Utf8);
};
const changeString = () => {
  return [encodeString, decodeString];
};

export default changeString;
