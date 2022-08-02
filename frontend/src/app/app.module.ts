import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { taskReducer } from './reducers/task.reducer';
import { ReadtasksComponent } from './readtasks/readtasks.component';
import { AddtaskComponent } from './addtask/addtask.component';
@NgModule({
  declarations: [AppComponent, ReadtasksComponent, AddtaskComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ tasks: taskReducer } as ActionReducerMap<any, any>),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
