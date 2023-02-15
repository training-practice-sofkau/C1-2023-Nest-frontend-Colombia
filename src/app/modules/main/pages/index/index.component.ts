import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'sofka-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  fecha: string = moment().format('LLL'); 

  constructor() {
  }

}
