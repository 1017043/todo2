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
          <Expansion
            todo_text={props.todo_text}
            todo_date={props.todo_date}　
            ClickOutlineButton={props.ClickOutlineButton}
            ClickButtonOfDelete={props.ClickButtonOfDelete}
          />
      </CardContent>
      <CardActions className={classes.Card__Action}>
        <CheckTodo check={props.check} ClickCheck={props.ClickCheck}/>
      </CardActions>
    </Card>
  );
}


export default withStyles(MaterialStyle)(AppCard);
