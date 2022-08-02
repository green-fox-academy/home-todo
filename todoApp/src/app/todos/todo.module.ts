import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';

import { TodoPageComponent } from './todo-page/todo-page.component';
import { HeaderComponent } from './header/header.component';
import { TodoService } from './todo.service';

const routes: Routes = [{ path: '', component: TodoPageComponent }];

@NgModule({
  declarations: [TodoPageComponent, HeaderComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
  providers: [TodoService],
})
export class TodoModule {}
