import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute } from '@angular/router';
import { TaskModel } from '../../models/task.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskUpdateModel } from '../../models/task-update.model';


@Component({
  selector: 'sofka-get-task-by-id',
  templateUrl: './get-task-by-id.component.html',
  styleUrls: ['./get-task-by-id.component.scss']
})
export class GetTaskByIdComponent {

  frmFormReactive : FormGroup;
  routergoBackMenu: string[];
  routeShowTaskById: TaskUpdateModel[];
  idU: string;

  constructor(private readonly task$: TaskService,private ruta: ActivatedRoute)  {

    this.routergoBackMenu = ['../'];
    this.routeShowTaskById =  new Array<TaskUpdateModel>() ;
    this.idU = localStorage.getItem('uid')?? '';
    this.frmFormReactive = new FormGroup({

      idCalendar:new FormControl('', Validators.required)

    });

  }

  cargarLista():void{

    this.task$.getById(this.frmFormReactive.get('idCalendar')?.value,this.idU).subscribe({

      next: data => (this.routeShowTaskById = data),
      error: err => console.log(err),
      complete: ()=> console.log('complete',this.routeShowTaskById)


    })


  }

  }


