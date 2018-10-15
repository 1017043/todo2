
import React, { Component } from 'react';
import '../../Style/index.css';

import CheckTodo from '../Atoms/CheckNoTodo.js';
import AppCard from '../Atoms/AppCard.js';

/*
/*親から受け取る要素
props.todo_value
ClickCheck
*/


class TodoCard extends Component{
  constructor(props) {
    super(props);
    console.log(this.props.todo_value)
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
    return(
      <AppCard
        check = {this.props.todo_value.check_do}
        todo_text={this.props.todo_value.text}
        todo_date={`残り${Math.trunc((this.state.dif_time)/86400000)}日と${Math.trunc((this.state.dif_time)%86400000/3600000)}時間${Math.trunc((this.state.dif_time)%86400000%3600000/60000)}分${Math.trunc((this.state.dif_time)%86400000%3600000%60000/1000)}秒`}
        ClickCheck={this.props.ClickCheck}/>
    )
  }
}








export default TodoCard;
