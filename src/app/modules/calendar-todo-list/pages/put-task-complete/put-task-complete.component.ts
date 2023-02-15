import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sofka-put-task-complete',
  templateUrl: './put-task-complete.component.html',
  styleUrls: ['./put-task-complete.component.scss']
})
export class PutTaskCompleteComponent {

  frmFormReactive : FormGroup;
  routergoBackMenu: string[];


  constructor(private readonly task$: TaskService, private ruta: ActivatedRoute) {

    this.routergoBackMenu = ['../'];
    this.frmFormReactive = new FormGroup({

    id:new FormControl('', Validators.required),
    isCompleted:new FormControl('', Validators.required)

  });

}


  ngOnInit(): void {
    this.ruta.params.subscribe(params => {
      this.task$.getTaskById(params['id']).subscribe({
        next: data => {this.frmFormReactive.setValue({

              isCompleted: data[0].isCompleted

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
        .updateTaskFinish(this.frmFormReactive.get('id')?.value, this.frmFormReactive.getRawValue())
        .subscribe({
          next: data => {
              console.log(data);
          },
          error: err => console.log(err),
        });
    });
  }
}
