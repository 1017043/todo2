import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import {MaterialStyle} from './MaterialStyle.js';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Expansion from './Expansion.js';


import CheckTodo from '../Atoms/CheckNoTodo.js';

const AppCard= (props) =>{
  const { classes } = props;
  if(props.check_time >= 0 || props.check === true){
  return (
    <Card className={classes.Card}>
      <CardActions className={classes.Card__Action}>
        <CheckTodo check={props.check} ClickCheck={props.ClickCheck}/>
      </CardActions>
      <CardContent className={classes.Card__Content}>
          <Expansion
            todo_text={props.todo_text}
            todo_date={props.todo_date}　
            ClickOutlineButton={props.ClickOutlineButton}
            ClickButtonOfDelete={props.ClickButtonOfDelete}
          />
      </CardContent>
    </Card>
  );
 }
 else{
   return(
     <Card className={classes.Card__Red}>
       <CardActions className={classes.Card__Action}>
         <CheckTodo check={props.check} ClickCheck={props.ClickCheck}/>
       </CardActions>
       <CardContent className={classes.Card__Content}>
           <Expansion
             todo_text={props.todo_text}
             todo_date={props.todo_date}　
             ClickOutlineButton={props.ClickOutlineButton}
             ClickButtonOfDelete={props.ClickButtonOfDelete}
           />
       </CardContent>
     </Card>
   );
 }
}


export default withStyles(MaterialStyle)(AppCard);
