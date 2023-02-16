import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sofka-post-task',
  templateUrl: './post-task.component.html',
  styleUrls: ['./post-task.component.scss']
})
export class PostTaskComponent {

  frmFormReactive : FormGroup;
  routergoBackMenu: string[];

  constructor(private readonly task$: TaskService) {

    this.routergoBackMenu = ['../'];
    this.frmFormReactive = new FormGroup({
    title: new FormControl('', Validators.required),
    descripccion: new FormControl('', Validators.required),
    resposible:new FormControl('', Validators.required),
    idCalendar:new FormControl('', Validators.required),
    idUser: new FormControl(localStorage.getItem('uid'), Validators.required)


  });


  }

  sendData(): void {

    console.log('sendData',this.frmFormReactive);

    this.task$.createTask(this.frmFormReactive.getRawValue()).subscribe({
      next: data => console.log(data , localStorage.getItem('uid')),
      error: err => console.log(err),
      complete: () => console.log('completo'),
    });



  }

}


