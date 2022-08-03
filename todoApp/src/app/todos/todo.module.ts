import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';

import { TodoPageComponent } from './todo-page/todo-page.component';
import { HeaderComponent } from './header/header.component';
import { TodoService } from './todo.service';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [{ path: '', component: TodoPageComponent }];

@NgModule({
  declarations: [TodoPageComponent, HeaderComponent, TodoListComponent, TodoComponent, FooterComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
  providers: [TodoService],
})
export class TodoModule {}
