import { Button } from "@material-ui/core";
import React from "react";

const ButtonCom = ({ label, variant, handleClick }) => {
  return (
    <div>
      <Button variant={variant} onClick={handleClick}>
        {label}
      </Button>
    </div>
  );
};

export default ButtonCom;
