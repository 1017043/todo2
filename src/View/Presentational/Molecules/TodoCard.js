import React from 'react';
import '../../Style/index.css';

import CheckTodo from '../Atoms/CheckNoTodo.js';
import TwoLowText from '../Atoms/TwoLowText.js';
import ButtonOfEdit from '../Atoms/ButtonOfEdit.js';
import ButtonOfDelete from '../Atoms/ButtonOfDelete.js';

const TodoCard = (props) =>{
  if(props.todo_value.check_do===false){
    return (
      <div className="TodoCard">
        <CheckTodo ClickCheck={props.ClickCheck} check={props.todo_value.check_do}/>
        <TwoLowText todo_value={props.todo_value}/>
        <ButtonOfEdit ClickButtonOfEdit={props.ClickOutlineButton}/>
        <ButtonOfDelete ClickButtonOfDelete={props.ClickButtonOfDelete}/>
      </div>
    )
  }
  else{
    return(
      <div className="TodoCard">
        <CheckTodo ClickCheck={props.ClickCheck} check={props.todo_value.check_do}/>
        <TwoLowText todo_value={props.todo_value}/>
        <ButtonOfDelete ClickButtonOfDelete={props.ClickButtonOfDelete}/>
      </div>
    )
  }
}

export default TodoCard;
