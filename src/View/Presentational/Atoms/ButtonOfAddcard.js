import React from 'react';
import '../../Style/index.css';

import { withStyles } from '@material-ui/core/styles';
import {MaterialStyle} from './MaterialStyle.js';
import Button from '@material-ui/core/Button';

const ButtonOfAddcard = (props) =>{
  const { classes } = props;
  return (
    <div className={classes.ButtonOfAddcard}>
      <Button color="primary" className={classes.ButtonOfAddcard__Send} onClick={props.ClickOutlineButton}>
        SEND
      </Button>
      <Button color="primary" className={classes.ButtonOfAddcard__Cancel} onClick={props.ClickCancel}>
        CANCEL
      </Button>
    </div>
  );
}


export default withStyles(MaterialStyle)(ButtonOfAddcard)
