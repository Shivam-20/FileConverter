import React from "react";
import { Button, Box } from "@material-ui/core";
// ui card to upload file
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
            <label htmlFor={props.id}>
              <input
              //id for element
                id={props.id}
                name={props.id}
                style={{ display: "none" }}
                type="file"
                //changeHandler called when file seleted
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
