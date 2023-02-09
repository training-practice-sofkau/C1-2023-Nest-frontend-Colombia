import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Pages
import { PrincipalComponent } from './pages/principal/principal.component';
import { GetTaskComponent } from './pages/get-task/get-task.component';
import { GetTaskByIdComponent } from './pages/get-task-by-id/get-task-by-id.component';
import { PostTaskComponent } from './pages/post-task/post-task.component';


const routes : Routes = [
{

  path: '', //localhost:4200/calendar-todo-list

  component: PrincipalComponent,


},
{

  path: 'get-task', //localhost:4200/calendar-todo-list/get-task


  component: GetTaskComponent,


},
{

    path: 'get-task-by-id', //localhost:4200/calendar-todo-list

    component: GetTaskByIdComponent,

},
{

      path: 'post-task', //localhost:4200/calendar-todo-list

      component: PostTaskComponent,


}

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class CalendarRoutingModule {}
