import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Modal } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

const Spinner = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Modal open={open} onClose={handleClose} disableBackdropClick>
        <div
          style={{
            marginLeft: "50%",
            marginTop: "20%",
            display: "inline-block",
            border: "none",
          }}
        >
          <CircularProgress />
        </div>
      </Modal>

      {/* <CircularProgress color="secondary" /> */}
    </div>
  );
};

export default Spinner;
