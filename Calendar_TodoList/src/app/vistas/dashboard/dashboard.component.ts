import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';
import { ListatareasI } from 'src/app/modelos/listatareas.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  tareas:ListatareasI[];

  constructor(private api:ApiService, private router:Router){}

  ngOnInit(): void{
    this.api.getAllTareas(1).subscribe((data: any) => {console.log(data)});
  }

  editarTarea(id:any){
    this.router.navigate(['editar', id]);
  }

  nuevaTarea(){
    this.router.navigate(['nuevo']);
  }
}
