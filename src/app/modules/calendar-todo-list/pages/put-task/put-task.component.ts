import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'sofka-put-task',
  templateUrl: './put-task.component.html',
  styleUrls: ['./put-task.component.scss']
})
export class PutTaskComponent {

  routergoBackMenu: string[];
  frmFormReactive : FormGroup;

  constructor(private readonly task$: TaskService,private ruta: ActivatedRoute) {

    this.routergoBackMenu = ['../'];


    this.frmFormReactive = new FormGroup({

      id: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      descripccion: new FormControl('', Validators.required),
      resposible:new FormControl('', Validators.required),
      isCompleted:new FormControl('', Validators.required),
      idCalendar:new FormControl('', Validators.required)

    });



  }

  ngOnInit(): void {
    this.ruta.params.subscribe(params => {
      this.task$.getById(params['id']).subscribe({
        next: data => {
            this.frmFormReactive.setValue({
              id: data[0].id,
              title: data[0].title,
              descripccion: data[0].descripccion,
              resposible: data[0].resposible,
              isCompleted: data[0].isCompleted,
              idCalendar: data[0].idCalendar
            });
        },
        error: err => console.log(err),
      });
    });
  }



  sendData(): void {
    this.frmFormReactive
      .get('isCompleted')
      ?.setValue(JSON.parse(this.frmFormReactive.get('isCompleted')?.value));
    this.ruta.params.subscribe(params => {
      this.task$
        .updateTaskCompleted(params['id'], this.frmFormReactive.getRawValue())
        .subscribe({
          next: data => {
            console.log('complete', data);

          },
          error: err => console.log(err),
        });
    });
  }
}
