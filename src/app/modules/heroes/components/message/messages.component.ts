import { Component, Inject, OnInit } from '@angular/core';
import { MessageService } from 'src/app/modules/heroes/services/message/message.service';

@Component({
  selector: 'sofka-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {}
}
