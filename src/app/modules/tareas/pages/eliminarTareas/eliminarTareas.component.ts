
  import { Component } from '@angular/core';
	import { FormControl, FormGroup, Validators } from '@angular/forms';
	import { ActivatedRoute, Router } from '@angular/router';
	import { TareasI } from '../../interfaces/tareas.interface';
	import { TareasService } from '../../services/tareas.service';


	@Component({
	  selector: 'app-eliminarTareas',
	  templateUrl: './eliminarTareas.component.html',
	  styleUrls: ['./eliminarTareas.component.css']
	})
	export class EliminarTareasComponent {


	  frmFormulario : FormGroup;
	  tareaId: string | null | undefined;
	  tarea: TareasI | undefined;


	  constructor(private readonly tareaService: TareasService, private activatedRoute: ActivatedRoute, private router: Router){


	    this.frmFormulario = new FormGroup({
	      id: new FormControl<number | null>(null, Validators.required),
	      idUser: new FormControl<string | null>(null, Validators.required),
	      title: new FormControl<string | null>(null, Validators.required),
	      description: new FormControl<string | null>(null, Validators.required),
	      responsible: new FormControl<string | null>(null, Validators.required),
	      priority: new FormControl<string | null>(null, Validators.required),
	      isCompleted: new FormControl<boolean | null>(null, Validators.required)
	    });
	  }
	  eliminarTarea(): void {
	    console.log(this.tarea);
	    this.frmFormulario.get('isCompleted')?.setValue(JSON.parse(this.frmFormulario.get('isCompleted')?.value));
	    this.tareaId = this.activatedRoute.snapshot.paramMap.get('id');
	    this.tareaService.deleteTarea(this.tareaId).subscribe({
	      next: (data) =>  {this.tarea = data;},
	      error: err =>  console.log(err),
	      complete: () =>  console.log('complete'),
	    });
	  }


	}

