import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/main/services/auth/auth.service';

@Component({
  selector: 'app-intermedio',
  templateUrl: './intermedio.component.html',
  styleUrls: ['./intermedio.component.css']
})
export class IntermedioComponent {
  opciones : string = 'MENU'
  routeCrear: string[];
  routeTraer: string[];
  routeActualizar: string[];
  routeEliminar: string[];

  constructor( private readonly authService: AuthService){
    this.routeCrear = ['./crear']
    this.routeTraer = ['./traer']
    this.routeActualizar = ['./actualizar']
    this.routeEliminar = ['./eliminar']
  }

  logout(): void {
    this.authService.SignOut();
  }

 }
