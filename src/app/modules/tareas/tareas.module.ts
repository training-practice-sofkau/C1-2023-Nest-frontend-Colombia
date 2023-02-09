import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareasRoutingModule } from './tareas-routing.module';

import { PrincipalComponent } from './pages/principal/principal.component';
import { ListarTareaComponent } from './pages/listar-tarea/listar-tarea.component';
import { DetalleTareaComponent } from './pages/detalle-tarea/detalle-tarea.component';
import { CrearTareaComponent } from './pages/crear-tarea/crear-tarea.component';



@NgModule({
  declarations: [
    PrincipalComponent,
    ListarTareaComponent,
    DetalleTareaComponent,
    CrearTareaComponent
  ],
  imports: [
    CommonModule,
    TareasRoutingModule
  ]
})
export class TareasModule { }
