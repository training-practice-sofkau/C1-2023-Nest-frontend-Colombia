import { Component, OnInit } from '@angular/core';
import { ItemI } from 'src/app/modelos/item.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { ListaItemI2 } from 'src/app/modelos/ListaItem2.interface';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private router : Router, private activatedRoute : ActivatedRoute, private api:ApiService){}

  datoItem !: ItemI;

  editarForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
    responsible: new FormControl(''),
    isCompleted : new FormControl(''),
  });

  ngOnInit(): void{
    let itemId = this.activatedRoute.snapshot.paramMap.get('id')??"";
    let token = this.getToken();
    this.api.getSingleItem(itemId).subscribe(data =>{
      this.datoItem = data;
      this.editarForm.setValue({
        id : this.datoItem.itemId,
        'title' : this.datoItem.title,
        'description' : this.datoItem.description,
        'responsible' : this.datoItem.responsible,
        'isCompleted' : this.datoItem.isCompleted,
      })
    })
  }

  getToken(){
    return localStorage.getItem('token')
  }

  postForm(form: ItemI){
    this.api.putItem(form).subscribe(data =>{
      console.log(data)
    })
  }

  eliminar(){
    // datos : tring  = this.editarForm.get('id')?.value;
    this.api.deleteItem(this.editarForm.get('id')?.value??"").subscribe(data => {
      console.log(data);
    })
  }
}
