export default function filetype(fileExtension) {
  if (fileExtension === "jpeg" || fileExtension === "png") {
    // console.log(fileExtension);
    return `image/${fileExtension}`;
  } else if (fileExtension === "txt") {
    return `text/plain`;
  } else if (fileExtension === "pdf") {
    return "application/pdf";
  } else {
    return "failed";
  }
}
