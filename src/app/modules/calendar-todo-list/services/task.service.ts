import { Injectable } from '@angular/core';
import { NewTaskModel } from '../../calendar-todo-list/models/new-task.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InewTask } from '../interfaces/new-task.interface';
import { ICalendar } from '../interfaces/calendar.interface';
import { catchError } from 'rxjs/operators';
import { TaskModel } from '../models/task.model';
import { OnlyTaskModel } from '../models/task-only.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  constructor(private readonly httClient: HttpClient) {}

  createTask(task: OnlyTaskModel) : Observable<InewTask> {
    return this.httClient.post<InewTask>('https://localhost:7281/api/Controlador',task);
  }


  updateTaskCompleted(id: number , task: TaskModel) : Observable<InewTask> {
    return this.httClient.put<InewTask>('https://localhost:7281/api/Controlador/' + id, task.getData().isCompleted);
  }


  GetAll(): Observable<ICalendar[]> {

    return this.httClient.get<ICalendar[]>('https://localhost:7281/api/Controlador/AllDaysAndItems');


  }


}
