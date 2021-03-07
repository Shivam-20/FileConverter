import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

const FileUploaderCard = (props) => {
  const { selectedFile, onChangeHandle } = props;

  return (
    <div style={{ width: "100%" }}>
      <Box display="flex" p={1} bgcolor="background.paper">
        <Box p={1}>
          <Button variant="contained" component="label">
            Upload File
            <input type="file" hidden onChange={onChangeHandle} />
          </Button>
        </Box>
        <Box p={1} flexGrow={1}>
          <div>{selectedFile && <div>{selectedFile.name}</div>}</div>
        </Box>
        <Box p={1}>
          <CheckIcon />
          <CloseIcon />
        </Box>
      </Box>
    </div>
  );
};

export default FileUploaderCard;
