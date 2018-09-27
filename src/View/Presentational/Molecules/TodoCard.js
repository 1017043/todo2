import React, { Component } from 'react';
import '../../Style/index.css';

import CheckNoTodo from '../Atoms/CheckNoTodo.js';
import TwoLowText from '../Atoms/TwoLowText.js';
import OutlineButton from '../Atoms/OutlineButton.js';

const TodoCard = (props) =>{
  return (
    <div className="TodoCard">
      <CheckNoTodo/>
      <TwoLowText/>
      <OutlineButton/>
    </div>
  )
}

export default TodoCard;
