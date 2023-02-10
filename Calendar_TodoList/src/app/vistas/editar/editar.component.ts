import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TareaI } from 'src/app/modelos/tarea.interface';
import { ResponseI } from 'src/app/modelos/response.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AlertasService } from 'src/app/servicios/alertas/alertas.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private Activaterouter:ActivatedRoute, private router:Router, private api:ApiService, private alertas:AlertasService){}

  datoTarea !: TareaI;

  editarForm = new FormGroup([
    nombre: new FormControl(''),
    descripcion: new FormControl(''),
    jornada: new FormControl('')

  ]);

  ngOnInit(): void{
    let tareaId = this.Activaterouter.snapshot.paramMap.get('id');
    let token = this.getToken();
    this.api.getSingleTarea(tareaId).subscribe((data: any) =>{
      this.datoTarea = data[0];
      this.editarForm.setValue({
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
    this.api.putTarea(form).subscribe((data) =>{
      let respuesta : ResponseI = data;
      if(respuesta.status=="ok"){
        this.alertas.showSuccess('Dato modificado', 'Hecho');
      }else{
        this.alertas.showError(respuesta.result.error_msg, 'Error');
      }
    });
  }
  eliminar(){
    let datos : TareaI = this.editarForm.value;
    this.api.deleteTarea(datos).subscribe(data =>{
      let respuesta : ResponseI = data;
      if(respuesta.status=="ok"){
        this.alertas.showSuccess('Tarea Eliminada', 'Hecho');
      }else{
        this.alertas.showError(respuesta.result.error_msg, 'Error');
      }
    })
  }
}
