import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as TaskAction from '../actions/task.action';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.scss'],
})
export class AddtaskComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  addTask(name: string, isDone: boolean) {
    this.store.dispatch(new TaskAction.AddTask({ name: name, isDone: isDone }));
  }

  ngOnInit(): void {}
}
