import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { ComponenteEjemploComponent } from '../../shared/components/componente-ejemplo/componente-ejemplo.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';

import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = ()=> redirectUnauthorizedTo(['login']);
const redirectLoggedInToIndex = ()=> redirectLoggedInTo(['']);

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data : {authGuardPipe: redirectLoggedInToIndex}
  },
  {
    path: '',
    component: IndexComponent,
    canActivate: [AngularFireAuthGuard],
    data : {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'todolist', // http://localhost:4200/todolist
    loadChildren: () =>
      import('../todo-list/todo-list.module').then(
        module => module.TodoListModule
      ),
      canActivate: [AngularFireAuthGuard],
      data : {authGuardPipe: redirectUnauthorizedToLogin}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
