import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITodoItem } from '../models/TodoList.model';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'sofka-detail-todolist',
  templateUrl: './detail-todolist.component.html',
  styleUrls: ['./detail-todolist.component.scss']
})
export class DetailTodolistComponent implements OnInit{

  /* @Input() tarea : ITodoItem | undefined; */

  lista: string[];

  tarea !: ITodoItem;
  id: string;

  constructor(private readonly todoListService: TodoListService, private route: ActivatedRoute){
    this.lista = ["../../"]
    this.id = '';

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    console.log(this.id);
    this.todoListService.getTodoListId(this.id).subscribe({
      next: data => this.tarea = data,
      error: err => console.log(err),
      complete: ()=> console.log('complete')
    })
  }



}
