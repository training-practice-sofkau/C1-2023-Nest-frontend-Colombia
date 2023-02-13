import { Injectable } from '@angular/core';
import { NewTaskModel } from '../../calendar-todo-list/models/new-task.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InewTask } from '../interfaces/new-task.interface';
import { ICalendar } from '../interfaces/calendar.interface';
import { CalendarModel } from '../models/calendar.models';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  constructor(private readonly httClient: HttpClient) {}

  createTask(task: NewTaskModel) : Observable<InewTask> {
    return this.httClient.post<InewTask>('https://localhost:7281/api/Controlador',task.getData());
  }

  GetAll(): Observable<ICalendar[]> {

    return this.httClient.get<ICalendar[]>('https://localhost:7281/api/Controlador/AllDaysAndItems');


  }


}
