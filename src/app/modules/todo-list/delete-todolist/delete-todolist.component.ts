import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'sofka-delete-todolist',
  templateUrl: './delete-todolist.component.html',
  styleUrls: ['./delete-todolist.component.scss']
})
export class DeleteTodolistComponent {

  lista: string[];
  id: string;

  constructor(private readonly todoListService: TodoListService, private route: ActivatedRoute, private router: Router){
    this.lista = ["../../"];
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    console.log(this.id);
  }

  deleteTodoList(): void{
    this.todoListService.deleteTodoList(this.id).subscribe({
      next: data => ( console.log(data)),
      error: err => console.log(err),
      complete: ()=> console.log('complete')
    })
    this.router.navigate(['todolist']);
  }

}
