export default function filetype(fileExtension) {
  console.log(fileExtension);
  if (
    fileExtension === "jpeg" ||
    fileExtension === "png" ||
    fileExtension === "gif"
  ) {
    console.log(fileExtension);
    return `image/${fileExtension}`;
  } else if (fileExtension === "txt") {
    return `text/plain`;
  } else if (fileExtension === "pdf") {
    return "application/pdf";
  } else if (fileExtension === "mp4") {
    return "video/mp4";
  } else {
    return "failed";
  }
}
