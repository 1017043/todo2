// react
import React, { Component } from 'react';
// redux
import { connect } from 'react-redux';

import * as actions from './Flux/Actions.js';

import TopPage from './View/Container/Templates/TopPage.js';


class App extends Component {
  sortTodo(todo_list){
    const order = this.props.set_state.order
    const display = this.props.set_state.display
    let cp_todo_list = todo_list.slice();

    switch (order){
      case "order_id":
        cp_todo_list.sort((a,b)=>a.id - b.id);
        break;
      case "order_date":
        console.log("test");
        cp_todo_list.sort((a,b)=>a.deadline - b.deadline);
        break;
      case "order_Date":
        cp_todo_list.sort((a,b)=>-(a.deadline - b.deadline));
        break;
      default:
        console.log(order);
    }
    switch (display){
      case "display_y":
        break;
      case "display_n":
        cp_todo_list = cp_todo_list.filter(value => value.check_do === false);
        break;
      default:
        console.log(display);
    }
    return cp_todo_list
  }
  render() {
    return (
      <TopPage
        ClickOutlineButton={this.props.actionAddTodo}
        todo_value_list={this.sortTodo(this.props.todo_value_list)}
        ClickCheck={this.props.checkTodo}
        ClickOutlineButtonOfTodo={this.props.changeTaskMd}
        ClickButtonOfDelete={this.props.deleteTask}
        changeSetUp={this.props.changeSetUp} />
    );
  }
}
function mapStateToProps(state) {
  console.log(state)
  return{
    page: state.ReducerChangeTaskAdd.page,
    todo_value_list: state.ReducerToDoList.todo_value_list,
    set_state: state.ReducerSetState.set_state
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actionAddTodo(add_todo_state){
      dispatch(actions.actionAddTodo(add_todo_state));
    },
    checkTodo(id){
      dispatch(actions.checkTodo(id));
    },
    changeTaskAdd(){
      dispatch(actions.changeTaskAdd());
    },
    changeTaskMd(state,id){
      dispatch(actions.changeTaskMd(state,id));
    },
    deleteTask(id){
      dispatch(actions.deleteTask(id));
    },
    changeSetUp(set_state){
      dispatch(actions.changeSetUp(set_state));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
