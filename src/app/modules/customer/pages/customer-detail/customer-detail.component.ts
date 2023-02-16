import { Component, OnInit } from '@angular/core';

import { UpdateUserModel } from '../../../auth/models';
import { UserInterface } from '../../../auth/interfaces';
import { DocumentTypeEnum } from '../../../../shared/enums';

@Component({
  selector: 'sofka-bank-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  user!: UserInterface;
  updateUser!: UpdateUserModel;

  constructor() {
    this.user = JSON.parse(localStorage.getItem('user')??JSON.stringify(''));
  }

  ngOnInit(): void {
  }


  onEdit(): void {
    this.updateUser = {...this.user.user}
  }

  onUpdate(user: UpdateUserModel):void{
    this.user.user = {...this.user.user, ...user, }
  }

  getPercentage(object: Object): number {
    let len = 0;
    let value = 0;
    let json = JSON.parse(JSON.stringify(object));
    for (let x in object) {
      len++
      if (json[x] !== '') { value++ }
    }
    return value / len
  }

  getKeyByValue(value: string) {
    const indexOfS = Object.values(DocumentTypeEnum).indexOf(value as unknown as DocumentTypeEnum);

    const key = Object.keys(DocumentTypeEnum)[indexOfS];

    return key;
  }
}
