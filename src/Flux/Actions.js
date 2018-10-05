export const CHANGE_TASK_ADD = Symbol();
export const ACTION_ADD_TODO= Symbol();
export const CHECK_TODO= Symbol();
export const CHANGE_TASK_MD= Symbol();
export const DELETE_TASK= Symbol();
export const CHANGE_SET_UP= Symbol();

export function changeTaskAdd() {
  return {
    type: CHANGE_TASK_ADD,
  };
}
export function actionAddTodo(add_todo_state) {
  return {
    type: ACTION_ADD_TODO,
    add_todo_state: add_todo_state,
  };
}

export function checkTodo(id) {
  return {
    type: CHECK_TODO,
    id: id
  };
}

export function changeTaskMd(state, id) {
  return {
    type: CHANGE_TASK_MD,
    md_todo_state: state,
    id: id
  };
}

export function deleteTask(id) {
  return {
    type: DELETE_TASK,
    id: id
  };
}

export function changeSetUp(set_state) {
  return {
    type: CHANGE_SET_UP,
    set_state: set_state
  };
}
