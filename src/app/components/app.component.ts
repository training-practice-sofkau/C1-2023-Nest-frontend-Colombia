import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  templateUrl: './messages/messages.component.html',
  styleUrls: ['./messages/messages.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes';
}