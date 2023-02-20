export class itemDeleteOrUpdate {
  itemId: string;
  title: string;
  description: string;
  responsible: string;
  isCompleted: boolean;
  state: boolean;
  uidUser: string;
  indexDay: string;
  indexDayNavigation: string;

  constructor(
    itemId: string,
    title: string,
    description: string,
    responsible: string,
    isCompleted: boolean,
    state: boolean,
    uidUser: string,
    indexDay: string,
    indexDayNavigation: string
  ) {
    this.itemId = itemId;
    this.title = title;
    this.description = description;
    this.responsible = responsible;
    this.isCompleted = isCompleted;
    this.state = state;
    this.uidUser = uidUser;
    this.indexDay = indexDay;
    this.indexDayNavigation = indexDayNavigation;
  }
}
