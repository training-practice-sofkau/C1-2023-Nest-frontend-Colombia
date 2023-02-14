import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute } from '@angular/router';
import { TaskUpdateModel } from '../../models/task-update.model';
import { ICalendar } from '../../interfaces/calendar.interface';

@Component({
  selector: 'sofka-get-task-by-id',
  templateUrl: './get-task-by-id.component.html',
  styleUrls: ['./get-task-by-id.component.scss']
})
export class GetTaskByIdComponent implements OnInit{


  routergoBackMenu: string[];
  routeShowTaskById: TaskUpdateModel[];

  constructor(private readonly task$: TaskService,private ruta: ActivatedRoute)  {


    this.routergoBackMenu = ['../'];
    this.routeShowTaskById =  new Array<TaskUpdateModel>() ;

  }

  ngOnInit(): void {
    this.ruta.params.subscribe(params => {
      this.task$.getById(params['id']).subscribe({
        next: data => (this.routeShowTaskById = data),
        error: err => console.log(err),
      });
    });
  }








  }

