import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute } from '@angular/router';
import { ICalendar } from '../../interfaces/calendar.interface';
@Component({
  selector: 'sofka-put-task',
  templateUrl: './put-task.component.html',
  styleUrls: ['./put-task.component.scss']
})
export class PutTaskComponent {

  routergoBackMenu: string[];
  frmFormReactive : FormGroup;
  idU: string;
  calendarWithTask: ICalendar[];
  constructor(private readonly task$: TaskService,private ruta: ActivatedRoute) {

    this.idU = localStorage.getItem('uid')?? '';
    this.calendarWithTask = new Array<ICalendar>();
    this.routergoBackMenu = ['../'];
    this.frmFormReactive = new FormGroup({

      id: new FormControl(null, [Validators.required]),
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      descripccion: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      resposible:new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      isCompleted:new FormControl('', Validators.required)

    });

  }



  ngOnInit(): void {


    this.task$.GetAll(this.idU).subscribe({
    next: (data) => {(this.calendarWithTask = data)

        this.ruta.params.subscribe(params => {
         this.task$.getTaskById(params['id'], this.idU).subscribe({
           next: data => {this.frmFormReactive.setValue({
            title: data[0].title,
            description: data[0].descripccion,
            responsible: data[0].resposible,
            isCompleted: data[0].isCompleted})
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
    this.frmFormReactive
      .get('isCompleted')?.setValue(JSON.parse(this.frmFormReactive.get('isCompleted')?.value));
    this.ruta.params.subscribe(params => {
      this.task$
        .updateTaskCompleted(this.frmFormReactive.get('id')?.value, this.frmFormReactive.getRawValue(),this.idU)
        .subscribe({
          next: data => {
            console.log(data);
          },
          error: err => console.log(err),
        });
    });
  }
}


