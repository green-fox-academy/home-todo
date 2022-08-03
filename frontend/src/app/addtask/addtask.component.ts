import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TaskAction from '../actions/task.action';
import { Task } from '../models/task.model';
import { TaskState } from '../reducers/task.reducer';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.scss'],
})
export class AddtaskComponent implements OnInit {
  constructor(private store: Store<{ tasks: TaskState }>) {}

  addTask(name: string) {
    this.store.dispatch(TaskAction.addTask({ name: name }));
  }

  ngOnInit(): void {}
}
