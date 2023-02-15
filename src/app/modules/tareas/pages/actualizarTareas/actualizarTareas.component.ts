import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TareasI } from '../../interfaces/tareas.interface';
import { TareasService } from '../../services/tareas.service';

@Component({
  selector: 'app-actualizarTareas',
  templateUrl: './actualizarTareas.component.html',
  styleUrls: ['./actualizarTareas.component.css']
})
export class ActualizarTareasComponent {

  frmFormulario : FormGroup;
  tarea: TareasI[];

  constructor(private readonly tareaService: TareasService, private router: Router){
    this.tarea = new Array<TareasI>(),
    this.frmFormulario = new FormGroup({
      title: new FormControl<string | null>(null, Validators.required),
      description: new FormControl<string | null>(null, Validators.required),
      responsible: new FormControl<string | null>(null, Validators.required),
      priority: new FormControl<string | null>(null, Validators.required),
      isCompleted: new FormControl<boolean | null>(null, Validators.required)
    });
  }

  actualizarTarea(): void {
    this.tareaService.putTarea(this.frmFormulario.getRawValue()).subscribe({
      next:(Item) =>{
        console.log(Item);
        this.router.navigate(['tareas']);
      }
  })
}


}

