import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { crearTareaI } from '../../interfaces/crearTarea';
import { TareasService } from '../../services/tareas.service';

@Component({
  selector: 'app-crearTareas',
  templateUrl: './crearTareas.component.html',
  styleUrls: ['./crearTareas.component.css']
})
export class CrearTareasComponent {
  frmFormulario : FormGroup;
  tarea: crearTareaI[];


  constructor(private tareaService: TareasService, private router: Router){
    this.tarea = [],
    this.frmFormulario = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(20),
        Validators.maxLength(100)
      ]),
      responsible: new FormControl('', [
        Validators.required,
        Validators.minLength(20),
        Validators.maxLength(100)
      ]),
      priority: new FormControl(''),
      isCompleted:new FormControl(''),
    });
  }

  crearTarea(): void {
    this.tareaService.postTarea(this.frmFormulario.getRawValue()).subscribe({
      next:(Item) =>{
        console.log(Item);
        this.router.navigate(['tareas']);
      }
  })
}


}





