import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  date = new Date(1988, 3, 15); // April 15, 1988
  name = 'John Doe';
  salary = 1000;
  phone = '1234567890';
  year = '2000';

  constructor() { }

  ngOnInit(): void {
  }

}
