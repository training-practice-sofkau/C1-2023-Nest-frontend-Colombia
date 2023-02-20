export class itemToDo {
  indexDay: number;
  title: string;
  description: string;
  responsible: string;
  uidUser: string;

  constructor(
    indexDay: number,
    title: string,
    description: string,
    responsible: string,
    uidUser: string
  ) {
    (this.indexDay = indexDay),
      (this.title = title),
      (this.description = description),
      (this.responsible = responsible),
      (this.uidUser = uidUser);
  }

  getData(): {
    indexDay: number;
    title: string;
    description: string;
    responsible: string;
    uidUser: string;
  } {
    return {
      indexDay: this.indexDay,
      title: this.title,
      description: this.description,
      responsible: this.responsible,
      uidUser: this.uidUser,
    };
  }
}
