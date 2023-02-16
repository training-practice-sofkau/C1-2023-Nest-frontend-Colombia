import { Injectable } from '@angular/core';
import { NewTaskModel } from '../../calendar-todo-list/models/new-task.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InewTask } from '../interfaces/new-task.interface';
import { ICalendar } from '../interfaces/calendar.interface';
import { OnlyTaskModel } from '../models/task-only.model';
import { TaskUpdateModel } from '../models/task-update.model';
import { TaskModel } from '../models/task.model';
import { TaskUpdateCompletekModel } from '../models/task-update-complete-model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  constructor(private readonly httClient: HttpClient) {}

  //listo
  createTask(task: OnlyTaskModel) : Observable<InewTask> {
    return this.httClient.post<InewTask>('https://localhost:7281/api/Controlador',task);
  }


  updateTaskCompleted(id: number, task: TaskUpdateModel) : Observable<InewTask> {
    return this.httClient.put<InewTask>('https://localhost:7281/UpdateAllTask/' + id, task);
  }


  updateTaskFinish(id: number, task: TaskUpdateCompletekModel) : Observable<InewTask> {
    return this.httClient.put<InewTask>('https://localhost:7281/CompletedOneTask/' + id, task);
  }

  getById(id: number, idU: string): Observable<TaskUpdateModel[]> {
    return this.httClient.get<TaskUpdateModel[]>('https://localhost:7281/OneDay/' + id +'/'+ idU);
  }


  getTaskById(id: number): Observable<TaskUpdateModel[]> {
    return this.httClient.get<TaskUpdateModel[]>('https://localhost:7281/OneTask/' + id);
  }

  //listo
  GetAll(id: string): Observable<ICalendar[]> {

    return this.httClient.get<ICalendar[]>('https://localhost:7281/api/Controlador/AllDaysAndItems/'+ id);


  }


}
