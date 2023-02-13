import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { TaskModel } from '../../models/task.model';

@Component({
  selector: 'sofka-post-task',
  templateUrl: './post-task.component.html',
  styleUrls: ['./post-task.component.scss']
})
export class PostTaskComponent {

  routergoBackMenu: string[];

    title: string;
    descripccion: string;
    resposible: string;
    isCompleted: boolean;
    estate: number;
    idCalendar: string;
    idCalendarNavigation: null;



  constructor(private readonly task$: TaskService) {

    this.routergoBackMenu = ['../'];
    this.title = '';
    this.descripccion = '';
    this.resposible = '';
    this.isCompleted = false;
    this.estate = 1;
    this.idCalendar = '';
    this.idCalendarNavigation = null;



  }
  sendData(): void {
    const item = new TaskModel(

      this.title,
      this.descripccion,
      this.resposible,
      this.isCompleted,
      this.estate,
      parseInt(this.idCalendar),
      this.idCalendarNavigation


    );
    this.task$.createTask(item).subscribe({
      next: data => console.log(data),
      error: err => console.log(err),
      complete: () => console.log('completo'),
    });
  }
}


