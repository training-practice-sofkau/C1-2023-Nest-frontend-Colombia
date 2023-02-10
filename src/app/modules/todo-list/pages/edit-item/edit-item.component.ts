/* eslint-disable prettier/prettier */
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoListI } from '../../interfaces/todo-list.interface';

@Component({
  selector: 'sofka-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent{

  routePrincipal: string[];
  item: TodoListI[];
  itemId: TodoListI;

  constructor(private router: Router, private activatedRoute: ActivatedRoute)
  {

    this.routePrincipal = ['../../'];
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
