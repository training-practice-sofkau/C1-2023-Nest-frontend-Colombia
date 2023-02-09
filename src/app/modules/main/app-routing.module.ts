import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    //carga perezosa
    path: 'calendar-todo-list',
    loadChildren: () => import('../calendar-todo-list/calendar-todo-list.module').then(m => m.CalendarTodoListModule)

  },
  {



  }


];




@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
