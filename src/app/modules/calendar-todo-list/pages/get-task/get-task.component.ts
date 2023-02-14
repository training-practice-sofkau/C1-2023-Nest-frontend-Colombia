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
  routeShowTask = [];
  calendarWithTask: ICalendar[];

  constructor(private readonly taskService: TaskService) {


    this.routergoBackMenu = ['../'];
    this.routeShowTask = [];
    this.calendarWithTask = new Array<ICalendar>();


  }

  ngOnInit(): void {

    this.taskService.GetAll().subscribe({
    next: (data) => {(this.calendarWithTask = data)

      data.forEach(element => {

        console.log(element.numberDaY)

        element.items.forEach(element2 =>{

        console.log(element2.descripccion)

        });


      });

    },
    error: (err) =>
    console.log(err),
    complete: () =>
    console.log(this.calendarWithTask)

    });
  }
}
