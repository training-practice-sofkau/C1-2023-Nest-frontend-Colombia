import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';
import { ListaTareasI } from 'src/app/modelos/listatareas.interface';
import { ListaDoble } from 'src/app/modelos/listadoble.model';
import { TareaI } from 'src/app/modelos/tarea.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tareas !: ListaDoble;

  constructor(private api:ApiService, private router:Router){}

  ngOnInit(): void{
    this.api.getAllTareas().subscribe({
      next: data => (this.tareas = data),
      error: err => console.log(err),
      complete: ()=> console.log('complete')
    });
  }

  editarTarea(id:any){
    this.router.navigate(['editar', id]);
  }

  nuevaTarea(){
    this.router.navigate(['nuevo']);
  }
}
