import { Button } from "@material-ui/core";
import React from "react";

const ButtonCom = ({ label, variant, handleClick, ...rest }) => {
  return (
    <div>
      <Button variant={variant} onClick={handleClick} {...rest}>
        {label}
      </Button>
    </div>
  );
};

export default ButtonCom;
