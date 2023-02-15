import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sofka-bank-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  @Input () value?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
