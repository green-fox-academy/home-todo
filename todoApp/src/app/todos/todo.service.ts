import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoInterface } from 'types/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // listOfTodos: TodoInterface[] = [
  //   { id: '1', text: 'Learn for test', isCompleted: false },
  //   { id: '2', text: 'Do this project', isCompleted: true },
  // ];

  todos$ = new BehaviorSubject<TodoInterface[]>([]);

  constructor() {}

  // getTodos(): TodoInterface[] {
  //   return this.listOfTodos;
  // }

  addTodo(text: string): void {
    const newTodo: TodoInterface = {
      text,
      isCompleted: false,
      id: Math.random().toString(16),
    };
    const updatedTodos = [...this.todos$.getValue(), newTodo];
    this.todos$.next(updatedTodos);
  }
}
