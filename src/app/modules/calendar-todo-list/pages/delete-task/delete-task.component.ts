import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICalendar } from '../../interfaces/calendar.interface';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sofka-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.scss']
})
export class DeleteTaskComponent {


  frmFormReactive : FormGroup;
  routergoBackMenu: string[];
  calendarWithTask: ICalendar[];
  idU: string;

  constructor(private readonly task$: TaskService, private ruta: ActivatedRoute) {

    this.calendarWithTask = new Array<ICalendar>();
    this.idU = localStorage.getItem('uid')?? '';
    this.routergoBackMenu = ['../'];
    this.frmFormReactive = new FormGroup({

    id:new FormControl('', Validators.required),

    });

  }

  ngOnInit(): void {

    this.task$.GetAll(this.idU).subscribe({
    next: (data) => {(this.calendarWithTask = data)
        this.ruta.params.subscribe(params => {
         this.task$.getTaskById(params['id'], this.idU).subscribe({
           next: data => {this.frmFormReactive.setValue({estate:0})
          },

          error: (err) => {
            console.log(err),console.log(this.calendarWithTask)
          },
          complete: () => {
            console.log('complete')
          }
        })
      })
    },error: (err) => {
      console.log(err),console.log(this.calendarWithTask)
    },complete: () => {
      console.log('complete')
    }
   })
  }




  sendData(): void {
    this.task$.deleteTask(this.frmFormReactive.get('id')?.value,this.idU).subscribe({
        next: data => {
            console.log(data);
        },
        error: err => {
          console.log(err);
        },
      })
    }

}

