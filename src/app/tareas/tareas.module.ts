import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//modulo de rutas

import {TareasRoutingModule} from './tareas-routing.module';

//componentes
import { CreartareasComponent } from './pages/creartareas/creartareas.component';
import { ActualizartareasComponent } from './pages/actualizartareas/actualizartareas.component';
import { TraertareasComponent } from './pages/traertareas/traertareas.component';
import { EliminartareasComponent } from './pages/eliminartareas/eliminartareas.component';
import { PrincipalComponent } from './pages/principal/principal.component';



@NgModule({
  declarations: [
    CreartareasComponent,
    ActualizartareasComponent,
    TraertareasComponent,
    EliminartareasComponent,
    PrincipalComponent

  ],
  imports: [
    CommonModule,
    TareasRoutingModule
    ],
    exports : [ CreartareasComponent, ActualizartareasComponent, TraertareasComponent, EliminartareasComponent, PrincipalComponent]

})
export class TareasModule { }
