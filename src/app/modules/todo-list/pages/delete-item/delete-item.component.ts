/* eslint-disable prettier/prettier */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoListI } from '../../interfaces/todo-list.interface';
import { TodoListService } from '../../services/todo-list/todo-list.service';

@Component({
  selector: 'sofka-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.scss']
})
export class DeleteItemComponent implements OnInit{

  item: TodoListI;
  itemId: string | null | undefined;
  routePrincipal: string[];
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


  ngOnInit(): void {
    this.itemId = this.activatedRoute.snapshot.paramMap.get('id');
    this.todoListService.deleteItemById(this.itemId).subscribe({
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
