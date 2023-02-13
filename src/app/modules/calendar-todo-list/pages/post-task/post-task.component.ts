import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { TaskModel } from '../../models/task.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'sofka-post-task',
  templateUrl: './post-task.component.html',
  styleUrls: ['./post-task.component.scss']
})
export class PostTaskComponent {

  frmFormReactive : FormGroup;
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
    this.frmFormReactive = new FormGroup({

    title: new FormControl(),
    descripccion: new FormControl(),
    resposible:new FormControl(),
    isCompleted:new FormControl(),
    estate:new FormControl(),
    idCalendar:new FormControl()
    });


  }




  sendData(): void {

    console.log('sendData',this.frmFormReactive);
/*
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
    */
  }

}


