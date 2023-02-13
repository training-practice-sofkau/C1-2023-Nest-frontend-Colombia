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

  tarea !: TareaI;

  constructor(private Activaterouter:ActivatedRoute, private router:Router, private api:ApiService,
    private alertas:AlertasService){}

  datoTarea !: TareaI;

  EditarForm = new FormGroup({
    nombre: new FormControl(''),
    descripcion: new FormControl(''),
    jornada: new FormControl('')});

  ngOnInit(): void{
   // let tareaid = this.Activaterouter.snapshot.paramMap.get('id');
   /* let token = this.getToken();
    this.api.getSingleTarea(tareaid).subscribe((data: any) =>{
      this.datoTarea = data[0];
      this.EditarForm.setValue({
        'nombre':this.datoTarea.nombre,
        'descripcion':this.datoTarea.descripcion,
        'jornada':this.datoTarea.jornada
      })
    })*/
  }

  getToken(){
    return localStorage.getItem('token')
  }

  postForm(form: any){

    this.tarea={
      nombre : form.nombre,
      descripcion : form.descripcion,
      jornada : form.jornada,
    };

    console.log(form);
    console.log(this.tarea);

    this.api.putTarea(this.tarea).subscribe((data) =>{
      let respuesta : ResponseI = data;
      if(respuesta.status=="ok"){
        this.alertas.showSuccess('Dato modificado', 'Hecho');
      }else{
        this.alertas.showError(respuesta.result.error_msg, 'Error');
      }
    });
  }

 /* Eliminar(){
    let datos : TareaI = this.EditarForm.value;
    this.api.deleteTarea(datos).subscribe(data =>{
      let respuesta : ResponseI = data;
      if(respuesta.status=="ok"){
        this.alertas.showSuccess('Tarea Eliminada', 'Hecho');
        this.router.navigate(['dashboard']);
      }else{
        this.alertas.showError(respuesta.result.error_msg, 'Error');
      }
    })
  }*/

  Salir(){
    this.router.navigate(['dashboard']);
  }
}
