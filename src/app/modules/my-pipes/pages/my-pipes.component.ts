import { Component, OnInit, PipeTransform } from '@angular/core';

@Component({
  selector: 'sofka-my-pipes',
  templateUrl: './my-pipes.component.html',
  styleUrls: ['./my-pipes.component.scss'],
})
export class MyPipesComponent implements OnInit {
  cumpleanios = new Date(2000, 8, 17);
  mayuscula = 'Jesus David Polo Espitia';
  minuscula = 'NACIÓ EL';
  estadodecuenta = 2000000;
  peso = 9.8087;
  natalityRate = 0.514;
  nacimiento='2000';
  celular = '3025727456';
  nombre = 'Josue Polo';

  constructor() {}

  ngOnInit(): void {}
}
