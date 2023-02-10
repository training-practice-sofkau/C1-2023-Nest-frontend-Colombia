import { Component } from '@angular/core';
import { TaskService } from '../../calendar-todo-list/services/task.service';
import { NewTaskModel } from '../../calendar-todo-list/models/new-task.model';

@Component({
  selector: 'sofka-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {

  title = 'FEBRERO';

  constructor(private readonly task$: TaskService ){}

  sendData():void{

    const taskfinally = new NewTaskModel('Tarea front', 'Realizar el consumo desdel front', 'Estevan Tangarife',false);


    this.task$.createTask(taskfinally).subscribe({

      next: (data) => console.log(data),

      error: (err) => console.log(err),

      complete: () => console.log('complete')

    });

  }


}
