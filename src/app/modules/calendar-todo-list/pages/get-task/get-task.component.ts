import { Component, OnInit } from '@angular/core';
import { TaskModel } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { ICalendar } from '../../interfaces/calendar.interface';

@Component({
  selector: 'sofka-get-task',
  templateUrl: './get-task.component.html',
  styleUrls: ['./get-task.component.scss']
})
export class GetTaskComponent implements OnInit {

  routergoBackMenu: string[];
  calendarWithTask: ICalendar[];
  idUser: string;

  constructor(private readonly taskService: TaskService) {


    this.routergoBackMenu = ['../'];
    this.calendarWithTask = new Array<ICalendar>();
    this.idUser = localStorage.getItem('uid')?? '';


  }

  ngOnInit(): void {


    this.taskService.GetAll(this.idUser).subscribe({
    next: (data) => {(this.calendarWithTask = data)
    },error: (err) => {
    console.log(err),console.log(this.calendarWithTask)
  },
    complete: () => {
        console.log(this.calendarWithTask);
      }
    })

  }
}









