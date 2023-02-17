import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemI } from 'src/app/modelos/item.interface';
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
    Title: new FormControl(''),
    Description: new FormControl(''),
    Responsible: new FormControl(''),
    IsCompleted : new FormControl(''),
  });

    constructor(private api:ApiService, private router:Router, private alertas: AlertasService){}

    ngOnInit() : void{
      let token = localStorage.getItem('token');
      this.nuevoForm.patchValue({
         //"token" : token,
      });
    }

    postForm(form: ItemI){
      this.api.putItem(form).subscribe(data =>{
        console.log(data);
      })
    }

    Salir(){
      this.router.navigate(['dashboard']);
    }
}
