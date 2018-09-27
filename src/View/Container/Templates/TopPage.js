import React, { Component } from 'react';
import '../../Style/index.css';

import Fab from '../../Presentational/Atoms/Fab.js';
import TodoList from '../Organisms/TodoList.js';
import AppMenuBar from '../Organisms/AppMenuBar.js';
import AddTodo from '../Organisms/AddTodo.js';

class TopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: 0,
    };
  }
  ChangeTask(n) {
    console.log(this.state.task);
    this.setState({
      task: n,
    });
  }

  render() {
    if(this.state.task===0){
      return (
        <div className="TopPage">
          <AppMenuBar onClick1=""/>
          <TodoList />
          <Fab onClick={()=>this.ChangeTask(1)}/>
        </div>
      );
    }
    else{
      return (
        <div className="TopPage">
          <AppMenuBar onClick1=""/>
          <TodoList />
          <Fab/>
          <AddTodo ClickBackCover={()=>this.ChangeTask(0)}/>
        </div>
      );
    }
  }
}

export default TopPage;
