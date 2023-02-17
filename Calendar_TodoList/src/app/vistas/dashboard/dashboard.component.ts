import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';
import { ListaItemI } from 'src/app/modelos/listaItem.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  items !: ListaItemI[];

  constructor(private api:ApiService, private router:Router){}

  ngOnInit(): void{
    this.api.getAllItems().subscribe(data =>{
      this.items = data.listItems;
      console.log(data);
    })
  }

  editarItem(id: string){
    this.router.navigate(['editar/:', id]);
  }

  nuevoItem(){
    this.router.navigate(['nuevo']);
  }
}
