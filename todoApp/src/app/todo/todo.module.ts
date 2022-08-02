import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';

import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [{ path: '', component: TodoListComponent }];

@NgModule({
  declarations: [TodoListComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class TodoModule {}
