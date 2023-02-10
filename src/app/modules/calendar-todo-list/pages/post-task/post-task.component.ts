import { Component } from '@angular/core';
import { NewTaskModel } from '../../models/new-task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'sofka-post-task',
  templateUrl: './post-task.component.html',
  styleUrls: ['./post-task.component.scss']
})
export class PostTaskComponent {

  routergoBackMenu: string[];

  constructor(private readonly task$: TaskService) {
    this.routergoBackMenu = ['../'];
  }

  sendData():void{

    const task = new NewTaskModel('Tarea front', 'Realizar api', 'Estevan Tanga',false);

    this.task$.createTask(task).subscribe({

        next: (data) => console.log(data),

        error: (err) => console.log(err),

        complete: () => console.log('complete')

      });


  }



}
