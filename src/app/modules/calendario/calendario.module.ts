import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarComponent } from './listar/listar.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { EditarComponent } from './editar/editar.component';
import { DetallesComponent } from './detalles/detalles.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayautComponent } from './layaut/layaut.component';
import { CalendarioRoutingModule } from './calendario.module.routing';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    ListarComponent,
    AgregarComponent,
    EliminarComponent,
    EditarComponent,
    DetallesComponent,
    HeaderComponent,
    FooterComponent,
    LayautComponent,
    LoginComponent,

  ],
  imports: [
    CommonModule,
    CalendarioRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CalendarioModule { }
