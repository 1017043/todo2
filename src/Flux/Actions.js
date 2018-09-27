export const CHANGE_TASK_ADD = Symbol();






export function changeTaskAdd() {
  return {
    type: CHANGE_TASK_ADD,
  };
}
