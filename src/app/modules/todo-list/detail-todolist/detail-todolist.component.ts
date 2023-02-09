import { Component } from '@angular/core';

@Component({
  selector: 'sofka-detail-todolist',
  templateUrl: './detail-todolist.component.html',
  styleUrls: ['./detail-todolist.component.scss']
})
export class DetailTodolistComponent {

  lista: string[];

  constructor(){
    this.lista = ["../"]
  }

}
