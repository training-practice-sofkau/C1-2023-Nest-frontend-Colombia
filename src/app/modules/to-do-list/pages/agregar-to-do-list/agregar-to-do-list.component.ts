import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToDoListService } from '../../services/to-do-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sofka-agregar-to-do-list',
  templateUrl: './agregar-to-do-list.component.html',
  styleUrls: ['./agregar-to-do-list.component.scss'],
})
export class AgregarToDoListComponent {
  //rutas
  routeDashboard: string[];

  //formulario
  frmAddItem: FormGroup;

  constructor(
    private readonly toDoList$: ToDoListService,
    private router: Router
  ) {
    this.routeDashboard = ['../'];
    this.frmAddItem = new FormGroup({
      indexDay: new FormControl('', [
        Validators.required,
        Validators.max(28),
        Validators.min(1),
      ]),
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      responsible: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      uidUser: new FormControl(localStorage.getItem('uidUser'), [
        Validators.required,
      ]),
    });
  }

  sendData(): void {
    console.log('send', localStorage.getItem('uidUser'));
    this.toDoList$.addItemToDo(this.frmAddItem.getRawValue()).subscribe({
      next: data => this.router.navigate(['to-do-list/dashboard']),
      error: err => console.log(err),
    });
  }
}
