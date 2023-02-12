import { Component, OnInit } from '@angular/core';
import { TaskModel } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'sofka-get-task',
  templateUrl: './get-task.component.html',
  styleUrls: ['./get-task.component.scss']
})
export class GetTaskComponent implements OnInit {



  routergoBackMenu: string[];
  routeShowTask = [];



  alltask: TaskModel[];


  constructor(private readonly taskService: TaskService) {


    this.routergoBackMenu = ['../'];
    this.routeShowTask = [];
    this.alltask = new Array<TaskModel>();


  }

  ngOnInit(): void {

    this.taskService.GetAll().subscribe({

    next: (data) =>
      console.log(data),
    error: (err) =>
      console.log(err),
    complete: () =>
      console.log('complete')

    });
  }





}
