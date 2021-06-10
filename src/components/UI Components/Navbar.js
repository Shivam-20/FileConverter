import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuListComposition from './Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Encryptofier
          </Typography>
          <MenuListComposition menuName="File" menuItems={[{subItem:"Encrypt",url:"/enrypto"},{subItem:"Decrypt",url:"/derypto"}]}/>
          <MenuListComposition menuName="Password" menuItems={[{subItem:"Encrypt",url:"/passencrypto"},{subItem:"Decrypt",url:"/passdecrypto"}]}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
// import React from "react";
// import { Menu as MenuIcon } from "@material-ui/icons";
// const {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Typography,
//   makeStyles,
//   Paper,
// } = require("@material-ui/core");


// const useStyles = makeStyles(theme => ({
//   offset: theme.mixins.toolbar,
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     '& > *': {
//       margin: theme.spacing(1),
//       width: theme.spacing(8),
//       height: theme.spacing(4),

//     },
//   },
// }))

// const SnackBar = () => {
//   const classes = useStyles();
//   return (
//     <AppBar position="static">
//       <Toolbar variant="dense">
//         <IconButton
//           edge="start"
//           className={classes.menuButton}
//           color="inherit"
//           aria-label="menu"
//         >
//           <MenuIcon />
//         </IconButton>
//         <Typography variant="h6" color="inherit">
//           Encryptofy
//         </Typography>
//         <div className={classes.root}>
//       <Paper elevation={0} >File</Paper>
//       <Paper />
//       <Paper elevation={3} />
//     </div>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default SnackBar;
