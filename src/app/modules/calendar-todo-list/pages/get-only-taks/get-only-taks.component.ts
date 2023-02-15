import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { TaskUpdateModel } from '../../models/task-update.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sofka-get-only-taks',
  templateUrl: './get-only-taks.component.html',
  styleUrls: ['./get-only-taks.component.scss']
})
export class GetOnlyTaksComponent {
  frmFormReactive : FormGroup;
  routergoBackMenu: string[];
  routeShowTaskById: TaskUpdateModel[];


  constructor(private readonly task$: TaskService,private ruta: ActivatedRoute)  {

    this.routergoBackMenu = ['../'];
    this.routeShowTaskById =  new Array<TaskUpdateModel>() ;
    this.frmFormReactive = new FormGroup({

      idCalendar:new FormControl('', Validators.required)

    });

  }

  cargarLista():void{

    this.task$.getTaskById(this.frmFormReactive.get('idCalendar')?.value).subscribe({

      next: data => (this.routeShowTaskById = data),
      error: err => console.log(err),
      complete: ()=> console.log('complete',this.routeShowTaskById)


    })


  }

}

