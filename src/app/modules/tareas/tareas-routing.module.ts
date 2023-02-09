import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ListarTareaComponent } from './pages/listar-tarea/listar-tarea.component';
import { DetalleTareaComponent } from './pages/detalle-tarea/detalle-tarea.component';

const routes: Routes = [
  {
    path: '',// localhost:4200/hoja-de-vida
    children: [
      {
        path:'home',
        component: PrincipalComponent
      },
      {
        path: 'listar',// localhost:4200/listar-tareas
        component: ListarTareaComponent
      },
      {
        path: 'detalle',// localhost:4200/detalle-tarea
        component: DetalleTareaComponent
      },
      {
        path: 'crear',// localhost:4200/crear-tarea
        component: DetalleTareaComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class TareasRoutingModule { }
