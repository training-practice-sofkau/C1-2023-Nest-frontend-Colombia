import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoListService } from '../../services/to-do-list.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sofka-editar-to-do-list',
  templateUrl: './editar-to-do-list.component.html',
  styleUrls: ['./editar-to-do-list.component.scss'],
})
export class EditarToDoListComponent implements OnInit {
  //rutas
  routeDashboard: string[];
  //variable
  // success: boolean = false;
  //variables consultas
  tittle!: string;
  //formulario
  frmEditItem: FormGroup;

  constructor(
    private readonly toDoList$: ToDoListService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.routeDashboard = ['../../'];
    this.frmEditItem = new FormGroup({
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
      isCompleted: new FormControl('', [Validators.required]),
    });
  }

  response(respuesta: string) {
    console.log(respuesta);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.toDoList$.getById(params['id']).subscribe({
        next: data => {
          (this.tittle = data[0].title),
            this.frmEditItem.setValue({
              title: data[0].title,
              description: data[0].description,
              responsible: data[0].responsible,
              isCompleted: data[0].isCompleted,
            });
        },
        error: err => console.log(err),
      });
    });
  }

  sendData(): void {
    //string to boolean
    this.frmEditItem
      .get('isCompleted')
      ?.setValue(JSON.parse(this.frmEditItem.get('isCompleted')?.value));
    //update
    this.route.params.subscribe(params => {
      this.toDoList$
        .editItem(params['id'], this.frmEditItem.getRawValue())
        .subscribe({
          next: data => {
            // this.success = true;
            this.router.navigate(['to-do-list/dashboard']);
          },
          error: err => console.log(err),
        });
    });
  }
}
