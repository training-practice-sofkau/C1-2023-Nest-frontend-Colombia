export class itemToDo {
  indexDay: number;
  title: string;
  description: string;
  responsible: string;

  constructor(
    indexDay: number,
    title: string,
    description: string,
    responsible: string
  ) {
    (this.indexDay = indexDay),
      (this.title = title),
      (this.description = description),
      (this.responsible = responsible);
  }

  getData(): {
    indexDay: number;
    title: string;
    description: string;
    responsible: string;
  } {
    return {
      indexDay: this.indexDay,
      title: this.title,
      description: this.description,
      responsible: this.responsible,
    };
  }
}
