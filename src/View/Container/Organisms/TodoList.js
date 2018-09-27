import React, { Component } from 'react';
import '../../Style/index.css';

import TodoCard from '../../Presentational/Molecules/TodoCard.js';


class TodoList extends Component {
  render() {
    return (
      <div className="TodoList">
        <TodoCard/>
        <TodoCard/>
        <TodoCard/>
      </div>
    );
  }
}

export default TodoList;
