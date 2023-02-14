import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { itemToDo } from '../../models/item.model';
import { ToDoListService } from '../../services/to-do-list.service';
import { itemDetail } from '../../models/itemDetail.model';

@Component({
  selector: 'sofka-detalle-to-do-list',
  templateUrl: './detalle-to-do-list.component.html',
  styleUrls: ['./detalle-to-do-list.component.scss'],
})
export class DetalleToDoListComponent implements OnInit, OnDestroy {
  routeDashboard: string[];
  itemDetail: itemDetail[];

  constructor(
    private readonly toDoList$: ToDoListService,
    private route: ActivatedRoute
  ) {
    this.routeDashboard = ['../../'];
    this.itemDetail = new Array<itemDetail>();
  }
  ngOnDestroy(): void {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.toDoList$.getById(params['id']).subscribe({
        next: data => (this.itemDetail = data),
        error: err => console.log(err),
      });
    });
  }
}
