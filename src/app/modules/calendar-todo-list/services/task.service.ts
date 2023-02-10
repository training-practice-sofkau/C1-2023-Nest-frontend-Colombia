import { Injectable } from '@angular/core';
import { NewTaskModel } from '../../calendar-todo-list/models/new-task.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  constructor(private readonly httClient: HttpClient) {}


  createTask(task: NewTaskModel){


    return this.httClient.post('https://localhost:7281/api/Controlador',task.getData());



  }


}
