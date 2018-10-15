import React, { Component } from 'react';
import '../../Style/index.css';

import TodoCard from '../../Presentational/Molecules/AppTodoCard.js';


class TodoList extends Component {
  makeTodoValueList(todo_value_list){
    const copy_todo_value_list = todo_value_list.map(
      (value, index) =>
      <TodoCard key={value.id} todo_value={value} ClickCheck={()=>this.props.ClickCheck(value.id)} ClickOutlineButton={()=>this.props.ClickOutlineButton(value.id)} ClickButtonOfDelete={()=>this.props.ClickButtonOfDelete(value.id)}/>
    );
    return copy_todo_value_list;
  }
  render() {
    return (
      <div className="TodoList">
        {this.makeTodoValueList(this.props.todo_value_list)}
      </div>
    );
  }
}

export default TodoList;
