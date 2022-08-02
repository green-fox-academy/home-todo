import { Injectable } from '@angular/core';
import { Todo } from 'types/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  listOfTodos: Todo[] = [
    { text: 'Learn for test', completed: false },
    { text: 'Do this project', completed: true },
  ];

  constructor() {}

  getTodos(): Todo[] {
    return this.listOfTodos;
  }
}
