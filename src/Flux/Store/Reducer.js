import * as actionTypes from '../Actions.js';
import { combineReducers } from 'redux'
import moment from 'moment'

const initialState = {
  page: "TopPage",
  todo_value_list: [
  ],
  set_state: {
    order: "order_id",
    display: "display_y",
  }
};

function ReducerChangeTaskAdd(state = initialState, action) {
  if(action.type===actionTypes.CHANGE_TASK_ADD){
    return Object.assign({}, state, {
      page: "home",
    })
  }
  return state;
}

function ReducerToDoList(state = initialState , action) {
  if(action.type===actionTypes.ACTION_ADD_TODO){
    let copy_todo_value_list = state.todo_value_list.slice();
    copy_todo_value_list.push({
      text: action.add_todo_state.textarea,
      deadline: moment(action.add_todo_state.datetime, "YYYY-MM-DDTHH:mm"),
      check_do: false,
      id: new Date().getTime()
    });
    return Object.assign({}, state, {
      todo_value_list: copy_todo_value_list,
    });
  }


  if(action.type===actionTypes.CHECK_TODO){
    let copy_todo_value_list = state.todo_value_list.slice();
    const target = copy_todo_value_list.findIndex(value =>{
      return value.id===action.id;
    });
    copy_todo_value_list[target].check_do = !(copy_todo_value_list[target].check_do);
    return Object.assign({}, state, {
      todo_value_list: copy_todo_value_list,
    });
  }


  if(action.type===actionTypes.CHANGE_TASK_MD){
    let copy_todo_value_list = state.todo_value_list.slice();
    const target = copy_todo_value_list.findIndex(value =>{
      return value.id===action.id;
    });
    let new_date = {
      text: action.md_todo_state.textarea,
      deadline: moment(action.md_todo_state.datetime, "YYYY-MM-DDTHH:mm"),
      check_do: false,
      id: action.id
    }
    copy_todo_value_list[target] = new_date;
    return Object.assign({}, state, {
      todo_value_list: copy_todo_value_list,
    });
  }

  if(action.type===actionTypes.DELETE_TASK){
    console.log("@test_modi", action.id)
    const copy_todo_value_list = state.todo_value_list.filter(value=>
      value.id!==action.id
    );
    return Object.assign({}, state, {
      todo_value_list: copy_todo_value_list,
    });
  }
  return state;
}

function ReducerSetState(state = initialState, action){
  if(action.type===actionTypes.CHANGE_SET_UP){
    return Object.assign({}, state, {
      set_state: action.set_state,
    });
  }
  return state;
}





export default combineReducers({
  ReducerChangeTaskAdd,
  ReducerToDoList,
  ReducerSetState
})

console.log(combineReducers);
