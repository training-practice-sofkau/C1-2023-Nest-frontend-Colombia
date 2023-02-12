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
    this.item = [];
    this.itemId = this.getItemById(this.activatedRoute.snapshot.paramMap.get('id'));
  }
  getItemById(arg0: string | null): TodoListI {
    throw new Error('Method not implemented.');
  }

  // getItemById(id: string): TodoListI{
  //   return {  };

  // // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  // ngOnInit(): void {
  //   this.itemId = this.getItemById(this.activatedRoute.snapshot.paramMap.get('id'));
  //   console.log(this.itemId);
  // }

  // return(): void {
  //   this.router.navigate(['principal']);
  // }


}
