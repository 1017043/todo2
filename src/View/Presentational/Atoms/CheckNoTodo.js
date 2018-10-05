import React from 'react';
import '../../Style/index.css';

const CheckTodo = (props) =>{
  if(props.check===false){
    return (
      <div className="CheckNoTodo">
        <i className="far fa-square fa-2x" onClick={props.ClickCheck}></i>
      </div>
    )
  }
  else{
    return (
      <div className="CheckNoTodo">
        <i className="far fa-check-square fa-2x" onClick={props.ClickCheck}></i>
      </div>
    )
  }
}

export default CheckTodo;
