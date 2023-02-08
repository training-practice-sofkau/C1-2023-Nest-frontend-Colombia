import { Component, OnInit, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-my-pipes',
  templateUrl: './my-pipes.component.html',
  styleUrls: ['./my-pipes.component.scss']
})
export class MyPipesComponent {
  cumpleanio = new Date(2000, 12, 11);
  mayuscula = 'Jesus David Polo Espitia';
  minuscula = 'NACIÓ EL';
  estadodecuenta = 82365215582;
  peso = 79.8087;
  natalityRate = 0.514;
  nacimiento='2000';
  celular = '3025727456';
  nombre = 'Josue Polo';

  constructor() {}

  ngOnInit(): void {}
}
