import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { inicioRoutingModule } from './inicio-routing.module';
import { PrincipalComponent } from './pages/principal/principal.component';
import { UserComponent } from './pages/user/user.component';
import { LoginComponent } from './pages/login/login.component';
import { TransferComponent } from './pages/transfer/transfer.component';
import { MovementComponent } from './pages/movement/movement.component';



@NgModule({
  declarations: [
    PrincipalComponent,
    UserComponent,
    LoginComponent,
    TransferComponent,
    MovementComponent
  ],
  imports: [
    CommonModule,inicioRoutingModule
  ]
})
export class InicioModule { }
