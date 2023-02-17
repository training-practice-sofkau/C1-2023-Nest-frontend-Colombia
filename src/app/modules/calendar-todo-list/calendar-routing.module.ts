import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Pages
import { PrincipalComponent } from './pages/principal/principal.component';
import { GetTaskComponent } from './pages/get-task/get-task.component';
import { GetTaskByIdComponent } from './pages/get-task-by-id/get-task-by-id.component';
import { PostTaskComponent } from './pages/post-task/post-task.component';
import { PutTaskCompleteComponent } from './pages/put-task-complete/put-task-complete.component';
import { PutTaskComponent } from './pages/put-task/put-task.component';
import { DeleteTaskComponent } from './pages/delete-task/delete-task.component';
import { GetOnlyTaksComponent } from './pages/get-only-taks/get-only-taks.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { Componente1Component } from './pages/componente1/componente1.component';


import{

  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo


} from '@angular/fire/compat/auth-guard';
 const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['calendar-todo-list/login']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['calendar-todo-list/dashboard']);



const routes : Routes = [

  {
    path: '', //localhost:4200/calendar-todo-list
    component: LoginComponent,
    //si puede o no entrar
    canActivate: [AngularFireAuthGuard],
    data:{authGuardPipe: redirectLoggedInToDashboard}
  },
  {
    path: 'calendar-todo-list/login', //localhost:4200/calendar-todo-list
    component: LoginComponent,
  },
  {
    path: 'calendar-todo-list/dashboard', //localhost:4200/calendar-todo-list
    component: DashboardComponent,
    canActivate: [AngularFireAuthGuard],
    data:{authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'calendar-todo-list/principal', //localhost:4200/calendar-todo-list
    component: PrincipalComponent,
  },
  {
    path: 'calendar-todo-list/principal/get-task', //localhost:4200/calendar-todo-list/get-task
    component: GetTaskComponent,
  },
  {
    path: 'calendar-todo-list/principal/get-task-by-id', //localhost:4200/calendar-todo-list
    component: GetTaskByIdComponent,
  },
  {
      path: 'calendar-todo-list/principal/post-task', //localhost:4200/calendar-todo-list
      component: PostTaskComponent,
  },
  {
    path: 'calendar-todo-list/principal/put-task', //localhost:4200/calendar-todo-list
    component: PutTaskComponent,

  },
  {
    path: 'calendar-todo-list/principal/post-task', //localhost:4200/calendar-todo-list
    component: PostTaskComponent,

  },
  {
    path: 'calendar-todo-list/principal/put-task-complete', //localhost:4200/calendar-todo-list
    component: PutTaskCompleteComponent,

 },
 {
  path: 'calendar-todo-list/principal/delete-task', //localhost:4200/calendar-todo-list
  component: DeleteTaskComponent,

},

{
  path: 'calendar-todo-list/principal/component1', //localhost:4200/calendar-todo-list
  component: Componente1Component,

},
{
  path: 'calendar-todo-list/principal/get-only-task', //localhost:4200/calendar-todo-list
  component: GetOnlyTaksComponent,

}

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class CalendarRoutingModule {}
