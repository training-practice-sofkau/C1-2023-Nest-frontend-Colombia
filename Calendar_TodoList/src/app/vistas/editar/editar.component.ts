import { Component, OnInit } from '@angular/core';
import { TareaI } from 'src/app/modelos/tarea.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute, private api:ApiService){}

  datoTarea !: TareaI;

  editarFor = new FormGroup({
    nombre: new FormControl(''),
    descripcion: new FormControl(''),
    jornada: new FormControl(''),
  });

  ngOnInit(): void{
    let tareaId = this.activatedRoute.snapshot.paramMap.get('id');
    let token = this.getToken();
    this.api.getSingleTarea(tareaId).subscribe(data =>{
      this.datoTarea = data;
      this.editarFor.setValue({
        'nombre':this.datoTarea.nombre,
        'descripcion':this.datoTarea.descripcion,
        'jornada':this.datoTarea.jornada,
      })
    } )
  }
  getToken(){
    return localStorage.getItem('token')
  }
  postForm(form: TareaI){
    this.api.putTarea(form).subscribe((data: any) =>{
      console.log(data)
    })
  }
  Eliminar(){
    let datos:any = this.editarFor.value;
    this.api.deleteTarea(datos).subscribe((data: any) =>{
      console.log(data);
    })
  }
}
