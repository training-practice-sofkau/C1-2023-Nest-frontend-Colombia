import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/core';
import { TareaI } from 'src/app/modelos/tarea.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private activaterouter:ActivatedRoute, private router:Router, private api:ApiService){}

  datoTarea !: TareaI;

  editarFor = new FormGroup([
    nombre: new FormControl(''),
    descripcion: new FormControl(''),
    jornada: new FormControl('')

  ]);

  ngOnInit(): void{
    let tareaId = this.activaterouter.snapshot.paraMap.get('id');
    let token = this.getToken();
    this.api.getSingleTarea(tareaId).subscribe((data: any) =>{
      this.datoTarea = data[0];
      this.editarFor.setValue({
        'nombre':this.datoTarea.Nombre,
        'descripcion':this.datoTarea.Descripcion,
        'jornada':this.datoTarea.Jornada,
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
    let datos:TareaI = this.editarFor.value;
    this.api.deleteTarea(datos).subscribe((data: any) =>{
      console.log(data);
    })
  }
}
