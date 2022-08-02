import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Task } from '../models/task.model';
import { AppState } from '../app.state';

@Component({
  selector: 'app-readtasks',
  templateUrl: './readtasks.component.html',
  styleUrls: ['./readtasks.component.scss'],
})
export class ReadtasksComponent implements OnInit {
  tasks: Observable<Task[]>;
  constructor(private store: Store<AppState>) {
    this.tasks = this.store.select('tasks');
  }

  ngOnInit(): void {}
}