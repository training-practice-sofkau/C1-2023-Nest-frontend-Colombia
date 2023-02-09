import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../main/validators/app-routing.module';
import { DatosUsuarioComponent } from './pages/datos-usuario/datos-usuario.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { TransferenciaComponent } from './pages/transferencia/transferencia.component';
import { LogComponent } from './pages/log/log.component';
import { PrincipalComponent } from './pages/principal/principal.component';



@NgModule({
  declarations: [
    DatosUsuarioComponent,
    HistorialComponent,
    TransferenciaComponent,
    LogComponent,
    PrincipalComponent
  ],
  imports: [
    CommonModule, AppRoutingModule
  ]
})
export class BancoModule { }
