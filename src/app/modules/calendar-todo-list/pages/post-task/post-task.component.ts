import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'sofka-post-task',
  templateUrl: './post-task.component.html',
  styleUrls: ['./post-task.component.scss']
})
export class PostTaskComponent {

  frmFormReactive : FormGroup;
  routergoBackMenu: string[];

  constructor(private readonly task$: TaskService,private router: Router) {

    this.routergoBackMenu = ['../'];
    this.frmFormReactive = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    descripccion: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ]),
    resposible:new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    idCalendar:new FormControl('',  [
      Validators.required,
      Validators.max(28),
      Validators.min(1),
    ]),
    idUser: new FormControl(localStorage.getItem('uid'), Validators.required)


  });


  }

  sendData(): void {

    console.log('sendData',this.frmFormReactive);

    this.task$.createTask(this.frmFormReactive.getRawValue()).subscribe({
      next: data => this.router.navigate(['calendar-todo-list/dashboard']),
      error: err => console.log(err),
      complete: () => console.log('completo'),
    });



  }

}


