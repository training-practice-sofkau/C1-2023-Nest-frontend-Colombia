import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute } from '@angular/router';
import { TaskUpdateModel } from '../../models/task-update.model';
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

      id: new FormControl(null, [Validators.required]),
      title: new FormControl('', Validators.required),
      descripccion: new FormControl('', Validators.required),
      resposible:new FormControl('', Validators.required),
      isCompleted:new FormControl('', Validators.required),
      idCalendar:new FormControl('', Validators.required)

    });

  }



  ngOnInit(): void {
    this.ruta.params.subscribe(params => {
      this.task$.getTaskById(params['id']).subscribe({
        next: data => { this.frmFormReactive.setValue({
              title: data[0].title,
              description: data[0].descripccion,
              responsible: data[0].resposible,
              isCompleted: data[0].isCompleted,
              idCalendar:data[0].idCalendar
            });
        },
        error: err => console.log(err),
      });
    });
  }


  sendData(): void {
    this.frmFormReactive
      .get('isCompleted')?.setValue(JSON.parse(this.frmFormReactive.get('isCompleted')?.value));
    this.ruta.params.subscribe(params => {
      this.task$
        .updateTaskCompleted(this.frmFormReactive.get('id')?.value, this.frmFormReactive.getRawValue())
        .subscribe({
          next: data => {
            console.log(data);
          },
          error: err => console.log(err),
        });
    });
  }
}


