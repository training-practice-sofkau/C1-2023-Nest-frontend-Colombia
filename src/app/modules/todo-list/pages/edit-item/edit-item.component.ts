/* eslint-disable prettier/prettier */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoListService } from '../../services/todo-list/todo-list.service';
import { todoListModel } from '../../models/todo-list.model';
import { TodoListI } from '../../interfaces/todo-list.interface';

@Component({
  selector: 'sofka-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit{

  routePrincipal: string[];
  item: TodoListI;

  id: string | null | undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private todoListService: TodoListService)
  {

    this.routePrincipal = ['../../'];

    this.item = {
      id: '',
      title: '',
      description: '',
      responsible: '',
      isCompleted: 0,
      state: 0,
    };

  }
  sendItem(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    const item = new todoListModel(this.item.title, this.item.description, this.item.responsible);
    this.todoListService.editItemById(this.id, item).subscribe({
      next: (data) =>  console.log(data),
      error: err =>  console.log(err),
      complete: () =>  console.log('complete'),
    });
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.todoListService.getItemById(this.id).subscribe({
      next: (data) =>  {this.item = data;},
      error: err =>  console.log(err),
      complete: () =>  console.log('complete'),
    });
    //console.log(this.itemId);
  }

  return(): void {
    this.router.navigate(['principal']);
  }

}
