import React, { Component } from 'react';
import '../../Style/index.css';

import CheckTodo from '../Atoms/CheckNoTodo.js';
import TwoLowText from '../Atoms/TwoLowText.js';
import ButtonOfEdit from '../Atoms/ButtonOfEdit.js';
import ButtonOfDelete from '../Atoms/ButtonOfDelete.js';

class TodoCard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      dif_time: this.props.todo_value.deadline-new Date()
    };
  }
  componentDidMount(){
    setInterval(() => this.setState({
      time: new Date(),
      dif_time: this.props.todo_value.deadline-new Date()
    }), 1000);
  }
  render(){
    if(this.props.todo_value.deadline.getTime() > this.state.time.getTime()){
      return (
        <div className="TodoCard">
          <CheckTodo ClickCheck={this.props.ClickCheck} check={this.props.todo_value.check_do}/>
          <TwoLowText todo_value={this.props.todo_value} dif_time = {this.state.dif_time}/>
          <ButtonOfEdit ClickButtonOfEdit={this.props.ClickOutlineButton}/>
          <ButtonOfDelete ClickButtonOfDelete={this.props.ClickButtonOfDelete}/>
        </div>
      )
    }
    else{
      return (
        <div className="TodoCard isactive_red">
          <CheckTodo ClickCheck={this.props.ClickCheck} check={this.props.todo_value.check_do}/>
          <TwoLowText todo_value={this.props.todo_value} dif_time = {this.state.dif_time}/>
          <ButtonOfEdit ClickButtonOfEdit={this.props.ClickOutlineButton}/>
          <ButtonOfDelete ClickButtonOfDelete={this.props.ClickButtonOfDelete}/>
        </div>
      )
    }
  }
}

export default TodoCard;
