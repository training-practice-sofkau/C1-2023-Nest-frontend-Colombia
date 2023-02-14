export class itemComplete {
  itemId: string;
  title: string;
  description: string;
  responsible: string;
  isCompleted: boolean;
  state: boolean;
  indexDay: number;
  indexDayNavigation: null;

  constructor(
    itemId: string,
    title: string,
    description: string,
    responsible: string,
    isCompleted: boolean,
    state: boolean,
    indexDay: number,
    indexDayNavigation: null
  ) {
    this.itemId = itemId;
    this.title = title;
    this.description = description;
    this.responsible = responsible;
    this.isCompleted = isCompleted;
    this.state = state;
    this.indexDay = indexDay;
    this.indexDayNavigation = indexDayNavigation;
  }
}
