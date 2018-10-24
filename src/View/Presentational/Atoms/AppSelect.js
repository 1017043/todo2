import React from 'react';
import '../../Style/index.css';

import { withStyles } from '@material-ui/core/styles';
import {MaterialStyle} from './MaterialStyle.js';

import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const AppSelect = (props) =>{
  const { classes } = props;
  return (
    <FormControl className={classes.AppSelectFormControl}>
      <InputLabel shrink htmlFor="age-native-label-placeholder">
        {props.cont}
      </InputLabel>
      <NativeSelect
        value={props.set_state[props.name]}
        name = {props.name}
        onChange={e => props.changeSelect(e)} >
        {props.choices}
       </NativeSelect>
    </FormControl>
  )
}


export default withStyles(MaterialStyle)(AppSelect);
