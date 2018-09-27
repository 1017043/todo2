import * as actionTypes from '../Actions.js';
import { combineReducers } from 'redux'

const initialState = {
  page: 0,
  task: 0,
};

function ReducerChangeTaskAdd(state = initialState , action) {
  if(action.type===actionTypes.CHANGE_TASK_ADD){
    return Object.assign({}, state, {
      task: 1,
    })
  }
  return state;
}


export default combineReducers({
  ReducerChangeTaskAdd,
})
