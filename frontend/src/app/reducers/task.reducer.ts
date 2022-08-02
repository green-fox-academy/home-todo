import { Task } from '../models/task.model';
import * as TaskAction from '../actions/task.action';

export function taskReducer(state: Task[] = [], action: TaskAction.Actions) {
  switch (action.type) {
    case TaskAction.ADD_TASK:
      return [...state, action.payload];
    case TaskAction.REMOVE_TASK:
      const newState = [...state];
      newState.splice(action.payload, 1);
      return newState;
    default:
      return state;
  }
}
