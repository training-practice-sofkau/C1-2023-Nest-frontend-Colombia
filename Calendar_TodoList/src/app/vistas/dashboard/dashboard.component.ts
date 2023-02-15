import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';
import { TareaI } from 'src/app/modelos/tarea.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  tareas!:TareaI[];

  constructor(private api:ApiService, private router:Router){}

  ngOnInit(): void{
    this.api.getAllTareas().subscribe(data => {console.log(data)});
  }

  editarTarea(id:string){
    this.router.navigate(['editar', id]);
  }

  nuevaTarea(){
    this.router.navigate(['nuevo']);
  }
}
