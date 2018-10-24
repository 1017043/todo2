import React from 'react';
import '../../Style/index.css';

import { withStyles } from '@material-ui/core/styles';
import {MaterialStyle} from './MaterialStyle.js';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';

const AppTopBar = (props) =>{
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.AppTopBar} variant="dense">
          <Typography variant="h5" color="inherit">
            ToDo
          </Typography>
          <IconButton className="" color="inherit" aria-label="Menu" onClick={props.ClickButtonOfSettings}>
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default withStyles(MaterialStyle)(AppTopBar)
