//Libraries
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulo de las rutas
import { CalendarRoutingModule } from './calendar-routing.module';

//Components
import { GetTaskComponent } from './pages/get-task/get-task.component';
import { GetTaskByIdComponent } from './pages/get-task-by-id/get-task-by-id.component';
import { PostTaskComponent } from './pages/post-task/post-task.component';
import { PutTaskCompleteComponent } from './pages/put-task-complete/put-task-complete.component';
import { PutTaskComponent } from './pages/put-task/put-task.component';
import { DeleteTaskComponent } from './pages/delete-task/delete-task.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GetOnlyTaksComponent } from './pages/get-only-taks/get-only-taks.component';



@NgModule({
  declarations: [
    GetTaskComponent,
    GetTaskByIdComponent,
    PostTaskComponent,
    PutTaskCompleteComponent,
    PutTaskComponent,
    DeleteTaskComponent,
    PrincipalComponent,
    GetOnlyTaksComponent


  ],
  imports: [CommonModule,CalendarRoutingModule,FormsModule,
    HttpClientModule,ReactiveFormsModule]
})
export class CalendarTodoListModule { }
