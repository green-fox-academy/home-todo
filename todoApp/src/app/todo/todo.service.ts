import { Injectable } from '@angular/core';
import { Todo } from 'types/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  listOfTodos: Todo[] = [
    { text: 'Learn for test', difficulty: 'hard', completed: false },
    { text: 'Do this project', importance: 'very important', completed: true },
  ];

  constructor() {}

  getTodos(): Todo[] {
    return this.listOfTodos;
  }
}
