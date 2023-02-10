import { Component } from '@angular/core';

@Component({
  selector: 'sofka-modify-todolist',
  templateUrl: './modify-todolist.component.html',
  styleUrls: ['./modify-todolist.component.scss']
})
export class ModifyTodolistComponent {

  lista: string[];

  constructor(){
    this.lista = ["../"]
  }

}
