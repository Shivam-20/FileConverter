import React from "react";
import { Button, Box } from "@material-ui/core";

const FileUploader = (props) => {
  return (
    <div>
      <div style={{ width: "100%" }}>
        <Box
          display="flex"
          justifyContent="center" 
          p={1}
          m={1}
          bgcolor="background.paper"
        >
          <Box p={1}>
            <label htmlFor="btn-upload">
              <input
                id="btn-upload"
                name="btn-upload"
                style={{ display: "none" }}
                type="file"
                onChange={props.changeHandler}
              />
              <Button
                className="btn-choose"
                variant="outlined"
                component="span"
              >
                Choose Files
              </Button>
            </label>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default FileUploader;
