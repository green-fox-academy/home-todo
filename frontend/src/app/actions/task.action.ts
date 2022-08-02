import { Action } from '@ngrx/store';
import { Task } from '../models/task.model';

export const ADD_TASK = '[Task] add';

export class AddTask implements Action {
  readonly type = ADD_TASK;

  constructor(public payload: Task) {}
}

export type Actions = AddTask;
