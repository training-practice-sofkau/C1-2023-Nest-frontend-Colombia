import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TareaI } from 'src/app/modelos/tarea.interface';
import { ResponseI } from 'src/app/modelos/response.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AlertasService } from 'src/app/servicios/alertas/alertas.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css'],
})
export class NuevoComponent implements OnInit {

  nuevoForm = new FormGroup({
    nombre: new FormControl(''),
    descripcion: new FormControl(''),
    jornada: new FormControl('')});

    constructor(private api:ApiService, private router:Router, private alertas: AlertasService){}

    ngOnInit() : void{
      let token = localStorage.getItem('token');
      this.nuevoForm.patchValue({
         //"token" : token,
      });
    }

    postForm(form: TareaI){
      this.api.putTarea(form).subscribe((data: any) =>{
        console.log(data);
      })
    }

    Salir(){
      this.router.navigate(['dashboard']);
    }
}
