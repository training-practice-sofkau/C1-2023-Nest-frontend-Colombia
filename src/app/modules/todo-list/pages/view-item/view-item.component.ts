/* eslint-disable prettier/prettier */
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoListI } from '../../interfaces/todo-list.interface';

@Component({
  selector: 'sofka-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss']
})
export class ViewItemComponent{

  item: TodoListI[];
  itemId: TodoListI;
  routePrincipal: string[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute)
  {

    this.routePrincipal = ['../../'];

    this.item = [];
    this.itemId = this.getItemById(Number(this.activatedRoute.snapshot.paramMap.get('id')));
  }
  getItemById(arg0: number): TodoListI {
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
