import React from 'react';
import '../../Style/index.css';

import { withStyles } from '@material-ui/core/styles';
import {MaterialStyle} from './MaterialStyle.js';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const AppTopBar = (props) =>{
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <IconButton className="" color="inherit" aria-label="Menu" onClick={props.ClickButtonOfSettings}>
            <SettingsIcon />
          </IconButton>
          <Typography variant="h5" color="inherit">
            ToDo
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default withStyles(MaterialStyle)(AppTopBar)
