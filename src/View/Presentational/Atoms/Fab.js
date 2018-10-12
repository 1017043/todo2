import React from 'react';
import '../../Style/index.css';

import { withStyles } from '@material-ui/core/styles';
import {MaterialStyle} from './MaterialStyle.js';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const Fab = (props) =>{
  const { classes } = props;
  return (
    <Button variant="fab" color="primary" aria-label="Add" className={classes.Fab} onClick={props.onClick}>
      <AddIcon fontSize = 'large'/>
    </Button>
  )
}


export default withStyles(MaterialStyle)(Fab)
