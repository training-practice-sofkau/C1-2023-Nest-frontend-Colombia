/* eslint-disable prettier/prettier */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TodoListI } from '../../interfaces/todo-list.interface';
import { FormGroup, FormControl, Validator } from '@angular/forms';

@Component({
  selector: 'sofka-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent{

  item: TodoListI[];
  itemId: TodoListI;

  constructor(private router: Router, private activatedRoute: ActivatedRoute)
  {

    this.item = [
      {
        Id: 1,
        Title: 'Estudiar Angular',
        Description: 'Estudiar Angular',
        Responsible: 'Juan',
        IsCompleted: false,
        State: true,
      },
      {
        Id: 2,
        Title: 'Estudiar React',
        Description: 'Estudiar React',
        Responsible: 'Juan',
        IsCompleted: false,
        State: true,
      },
      {
        Id: 3,
        Title: 'Estudiar Vue',
        Description: 'Estudiar Vue',
        Responsible: 'Juan',
        IsCompleted: false,
        State: true,
      },
    ];
    this.itemId = this.getItemById(Number(this.activatedRoute.snapshot.paramMap.get('id')));
  }

  getItemById(id: number){
    return this.item[id-1];
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(): void {
    this.itemId = this.getItemById(Number(this.activatedRoute.snapshot.paramMap.get('id')));
    console.log(this.itemId);
  }

  return(): void {
    this.router.navigate(['principal']);
  }


}
