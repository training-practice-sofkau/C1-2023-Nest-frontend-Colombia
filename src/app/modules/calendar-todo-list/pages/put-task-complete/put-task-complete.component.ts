import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'sofka-put-task-complete',
  templateUrl: './put-task-complete.component.html',
  styleUrls: ['./put-task-complete.component.scss']
})
export class PutTaskCompleteComponent {
  frmFormReactive : FormGroup;
  routergoBackMenu: string[];
/*
    title: string;
    descripccion: string;
    resposible: string;
    isCompleted: boolean;
    estate: number;
    idCalendar: string;
    idCalendarNavigation: null;
*/
  constructor(private readonly task$: TaskService) {

    this.routergoBackMenu = ['../'];
    this.frmFormReactive = new FormGroup({

    isCompleted:new FormControl('', Validators.required),
    idCalendar:new FormControl('', Validators.required)

  });


  }

  sendData(): void {

    console.log('sendData',this.frmFormReactive);

    //console.log(this.frmFormReactive.getRawValue());
    /*
    this.task$.createTask(this.frmFormReactive.getRawValue()).subscribe({
      next: data => console.log(data),
      error: err => console.log(err),
      complete: () => console.log('completo'),
    });
    */

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
