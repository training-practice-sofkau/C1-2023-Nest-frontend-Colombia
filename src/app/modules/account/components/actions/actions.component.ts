import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'account-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
})
export class ActionsComponent implements OnInit {
  constructor() {}
  @Input() id!:string
  ngOnInit(): void {

  }
}
