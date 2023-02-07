import { Component } from '@angular/core';
import { MessageService } from 'src/app/modules/heroes/services/message/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {

  constructor(public messageService: MessageService) {}

}
