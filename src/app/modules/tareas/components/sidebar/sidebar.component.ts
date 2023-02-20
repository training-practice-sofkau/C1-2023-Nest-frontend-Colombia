import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar-service/sidebar.service';

@Component({
  selector: 'sofka-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  routeCrear: string[];
  routeHome: string[];
  routeListarTodo: string[];
  estado: boolean;

  constructor(private readonly sidebarService: SidebarService){
    this.estado = true;
    this.routeCrear = ['./crear']
    this.routeHome = ['./home']
    this.routeListarTodo = ['./listarTodo']
  }

  ngOnInit(){
    this.sidebarService.cambiarEstado.subscribe({
      next: (estado: boolean) => this.estado = estado,
      error: (err: Error) => console.log(err),
    }); 
  }

}
