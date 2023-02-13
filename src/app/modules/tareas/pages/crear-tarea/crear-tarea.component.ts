import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IpostTarea } from '../../interfaces/tareas-post.interface';
import { TareaService } from '../../services/tareaService/tarea.service';

@Component({
  selector: 'sofka-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.scss']
})
export class CrearTareaComponent {
  tareaForm: FormGroup;

  constructor(private readonly tareaService: TareaService){
    this.tareaForm = new FormGroup({
      'dia': new FormControl<number>(0),
      'title': new FormControl<string>(''),
      'description': new FormControl<string>(''),
      'responsible': new FormControl<string>(''),
      'priority': new FormControl<string>(''),
      'isCompleted': new FormControl<boolean>(false)
    });
  }

  crear(){
    console.log(this.tareaForm.value);
    this.tareaService.postTarea(this.tareaForm.value).
    subscribe(data => {
        console.log(data);
    });
  }
}
