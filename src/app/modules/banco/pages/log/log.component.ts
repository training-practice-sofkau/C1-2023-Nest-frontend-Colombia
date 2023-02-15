import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  // formulario: FormGroup;

  constructor() {
    // this.formulario = new FormGroup({
    //   email: new FormControl(),
    //   password: new FormControl()
    // });
  }


  ngOnInit(): void {
  }

}
