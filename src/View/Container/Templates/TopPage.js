import React, { Component } from 'react';
import '../../Style/index.css';

import Fab from '../../Presentational/Atoms/Fab.js';
import TodoList from '../Organisms/TodoList.js';
import AppMenuBar from '../Organisms/AppMenuBar.js';
import AddTodo from '../Organisms/AddTodo.js';
import SetTodo from '../Organisms/SetTodo.js';


class TopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: 0,
      target: 0,
    };
  }
  ChangeTask(n,id){
      this.setState({
      task: n,
      target: id,
    });
  }

  render() {
    if(this.state.task===0){
      return (
        <div className="TopPage">
          <AppMenuBar ClickButtonOfGear={()=>this.ChangeTask(3,0)}/>
          <TodoList
            todo_value_list={this.props.todo_value_list}
            ClickCheck={this.props.ClickCheck}
            ClickOutlineButton={(id)=>{
              this.ChangeTask(2, id);
            }}
            ClickButtonOfDelete={this.props.ClickButtonOfDelete} />
          <Fab onClick={()=>this.ChangeTask(1,0)}/>
        </div>
      );
    }
    else if(this.state.task===1){
      return (
        <div className="TopPage">
          <AppMenuBar/>
          <TodoList todo_value_list={this.props.todo_value_list}/>
          <Fab/>
          <AddTodo
            first_state={{
              text: "入力してください",
              deadline: new Date()
             }}
            ClickBackCover={()=>this.ChangeTask(0,0)}
            ClickOutlineButton={this.props.ClickOutlineButton} />
        </div>
      );
    }
    else if(this.state.task===2){
      return (
        <div className="TopPage">
          <AppMenuBar/>
          <TodoList todo_value_list={this.props.todo_value_list}/>
          <AddTodo　
            first_state={this.props.todo_value_list.find(
              value => value.id===this.state.target
            )}
            ClickBackCover={()=>this.ChangeTask(0,0)}
            ClickOutlineButton={
              (state)=>{
                this.props.ClickOutlineButtonOfTodo(state, this.state.target);
                this.ChangeTask(0,0);
              }
            }/>
        </div>
      );
    }
    else if(this.state.task===3){
      return (
        <div className="TopPage">
          <AppMenuBar/>
          <TodoList todo_value_list={this.props.todo_value_list}/>
          <SetTodo
          ClickBackCover={()=>this.ChangeTask(0,0)}
          changeSetUp={this.props.changeSetUp} />
        </div>
      );
    }
  }
}

export default TopPage;
