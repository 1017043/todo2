import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import {MaterialStyle} from './MaterialStyle.js';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Expansion from './Expansion.js';


import CheckTodo from '../Atoms/CheckNoTodo.js';

const AppCard= (props) =>{
  const { classes } = props;
  return (
    <Card className={classes.Card}>
      <CardContent className={classes.Card__Content}>
        <Typography variant="h6">
          {props.todo_text}
          <Expansion />
        </Typography>
        <Typography variant=""　color="textSecondary">
          {props.todo_date}
        </Typography>
      </CardContent>
      <CardActions className={classes.Card__Action}>
        <CheckTodo check={props.check} ClickCheck={props.ClickCheck}/>
      </CardActions>
    </Card>
  );
}


export default withStyles(MaterialStyle)(AppCard);
