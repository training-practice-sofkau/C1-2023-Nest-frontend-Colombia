import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../services/tareaService/tarea.service';

@Component({
  selector: 'sofka-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit{
  dias: number[];

  constructor(private readonly tareaService: TareaService){
    this.dias = new Array<number>();
  }

  ngOnInit(): void {
    this.tareaService.getIdUser(localStorage.getItem('uid')).subscribe({
      next: dias => (this.dias = dias),
      error: err => console.log(err),
      complete: () => console.log('Complete')
    });

     /* if(this.mes == 2){
      for(let i=1; i <= 28; i++){
        this.dias.push(i);
      } 
    } */
  }

      
}

