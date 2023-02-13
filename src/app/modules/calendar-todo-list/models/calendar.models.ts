import { ItaskItems } from "../interfaces/task-item.interface";
import { TaskModel } from './task.model';

export class CalendarModel {

  numberDaY: number;
  Items: TaskModel[];

  constructor(numberDaY: number, Items: TaskModel[]) {

    this.numberDaY = numberDaY;
    this.Items = Items;

  }

  getCalendar():{numberDaY: number, Items: TaskModel[]} {

{
  return {
      numberDaY: this.numberDaY,
      Items: this.Items
    }
  }


  }
}
