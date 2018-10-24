import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import {MaterialStyle} from './MaterialStyle.js';

import TextField from '@material-ui/core/TextField';

const AppTextField = (props) => {
  const { classes } = props;
  return(
    <TextField
      id="standard-multiline-static"
      label="やるべきこと"
      multiline
      rows="1"
      placeholder={props.placeholder}
      defaultValue={props.defaultValue}
      className = {classes.TextField}
      classes={{
        marginNormal: classes.FromControl__marginNormal,
      }}
      value = {props.value}
      margin="normal"
      onChange = {e => props.onChange(e)}/>
  )
}

export default withStyles(MaterialStyle)(AppTextField);
