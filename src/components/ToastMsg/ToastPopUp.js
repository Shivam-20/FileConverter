import React from "react";
import { Toast } from "react-bootstrap";

const ToastPopUp = (props) => {
  let { messageBody, isError, delay, ...rest } = props;
  let attributes =
    delay === true ? { ...rest, delay: 5000, autohide: true } : rest;
  return (
    <Toast
      {...attributes}
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: 10,
        width: "300px",
        background: isError ? "#d9534f " : "#5cb85c",
      }}
    >
      <Toast.Header>
        <strong className="mr-auto">Notification</strong>
      </Toast.Header>

      <Toast.Body>{messageBody}</Toast.Body>
    </Toast>
  );
};

export default ToastPopUp;
