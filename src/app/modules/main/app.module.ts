import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './pages/app.component';

//Components
/*
import {GetTaskComponent} from '../calendar-todo-list/pages/get-task/get-task.component';
import {GetTaskByIdComponent} from '../calendar-todo-list/pages/get-task-by-id/get-task-by-id.component';
import {PostTaskComponent} from '../calendar-todo-list/pages/post-task/post-task.component';
import {PutTaskCompleteComponent} from '../calendar-todo-list/pages/put-task-complete/put-task-complete.component';
import {PutTaskComponent} from '../calendar-todo-list/pages/put-task/put-task.component';
import {DeleteTaskComponent} from '../calendar-todo-list/pages/delete-task/delete-task.component';
*/


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  declarations: [

  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
