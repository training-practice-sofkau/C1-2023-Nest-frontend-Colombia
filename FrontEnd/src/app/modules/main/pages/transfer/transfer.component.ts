import { Component } from '@angular/core';
import { ITranfersModel } from '../../models/transfer.model';

@Component({
  selector: 'sofka-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent {

  transfers: ITranfersModel[] = []; 

}
