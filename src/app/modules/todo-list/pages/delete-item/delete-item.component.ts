/* eslint-disable prettier/prettier */
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoListI } from '../../interfaces/todo-list.interface';

@Component({
  selector: 'sofka-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.scss']
})
export class DeleteItemComponent{

  item: TodoListI[];
  itemId: TodoListI;
  routePrincipal: string[];
  constructor(private router: Router, private activatedRoute: ActivatedRoute)
  {

    this.routePrincipal = ['../../'];

    this.item = [];
    this.itemId = this.getItemById(this.activatedRoute.snapshot.paramMap.get('id'));
  }
  getItemById(arg0: string | null): TodoListI {
    throw new Error('Method not implemented.');
  }

  // getItemById(id: string){
  //   return '';
  // }

  // // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  // ngOnInit(): void {
  //   this.itemId = this.getItemById(this.activatedRoute.snapshot.paramMap.get('id'));
  //   console.log(this.itemId);
  // }

  // return(): void {
  //   this.router.navigate(['principal']);
  // }


}
