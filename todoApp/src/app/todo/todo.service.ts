import { Injectable } from '@angular/core';
import { Todo } from 'types/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  listOfTodos: Todo[] = [
    { text: 'learn for test', difficulty: 'hard' },
    { text: 'do this project', importance: 'very important' },
  ];

  constructor() {}

  getTodos(): Todo[] {
    return this.listOfTodos;
  }
}
