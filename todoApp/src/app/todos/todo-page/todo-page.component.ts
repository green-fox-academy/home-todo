import { TodoService } from '../todo.service';
import { Component, OnInit } from '@angular/core';
// import { FormControl } from '@angular/forms';

import { TodoInterface } from 'types/todo.interface';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent implements OnInit {
  // checkboxForm = new FormControl('');
  listOfTodos: TodoInterface[] = [];

  constructor(private TodoService: TodoService) {}

  ngOnInit(): void {
    // this.listOfTodos = this.TodoService.getTodos();
  }
}
