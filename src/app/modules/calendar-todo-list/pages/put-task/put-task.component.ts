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
      id: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      descripccion: new FormControl('', Validators.required),
      resposible:new FormControl('', Validators.required),
      isCompleted:new FormControl('', Validators.required),
      idCalendar:new FormControl('', Validators.required)

    });

  }


  cargarLista():void{

    this.task$.updateTaskCompleted(this.frmFormReactive.get('idCalendar')?.value,this.frmFormReactive.getRawValue()).subscribe({

      next: data => console.log(data),
      error: err => console.log(err),
      complete: ()=> console.log('complete')


    })


  }

/*
  ngOnInit(): void {

      next: data => {(this.title = data[0].title),
            this.frmEditItem.setValue({
              title: data[0].title,
              description: data[0].description,
              responsible: data[0].responsible,
              isCompleted: data[0].isCompleted,
            });
        }
  }
*/
 /*
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
*/
}
