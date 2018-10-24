import React from 'react';
import moment from 'moment'

import { withStyles } from '@material-ui/core/styles';
import {MaterialStyle} from './MaterialStyle.js';

import TextField from '@material-ui/core/TextField';

const PickerDatetime = (props) => {
  const { classes } = props;
  return (
    <TextField
      id="datetime-local"
      label="期限"
      type="datetime-local"
      className={classes.PickerDatetime}
      InputLabelProps={{
        shrink: true,
      }}
      onChange={e => props.changeDatetime(e)}
      defaultValue={moment(props.first_date).format("YYYY-MM-DDTHH:mm")} />
   );
}

export default withStyles(MaterialStyle)(PickerDatetime);
