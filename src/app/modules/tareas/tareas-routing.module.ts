import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ListarTareaComponent } from './pages/listar-tarea/listar-tarea.component';
import { DetalleTareaComponent } from './pages/detalle-tarea/detalle-tarea.component';
import { CrearTareaComponent } from './pages/crear-tarea/crear-tarea.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path:'home',// localhost:4200/tareas
        component: PrincipalComponent
      },
      {
        path: 'listar',// localhost:4200/tareas/listar
        component: ListarTareaComponent
      },
      {
        path: 'detalle',// localhost:4200/tareas/detalle
        component: DetalleTareaComponent
      },
      {
        path: 'crear',// localhost:4200/tareas/crear
        component: CrearTareaComponent
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
