import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './componente/app.component';
import { IndexComponent } from './index/index.component';




const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  { path: 'tareas', loadChildren: () =>
  import('../tareas/tareas.module').then(
    (m) => m.TareasModule
  ),}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
