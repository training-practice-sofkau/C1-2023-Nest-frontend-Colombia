export class itemDetail {
  indexDay: number;
  title: string;
  description: string;
  responsible: string;
  isCompleted: string;

  constructor(
    indexDay: number,
    title: string,
    description: string,
    responsible: string,
    isCompleted: string
  ) {
    (this.indexDay = indexDay),
      (this.title = title),
      (this.description = description),
      (this.responsible = responsible);
    this.isCompleted = isCompleted;
  }

  getData(): {
    indexDay: number;
    title: string;
    description: string;
    responsible: string;
    isCompleted: string;
  } {
    return {
      indexDay: this.indexDay,
      title: this.title,
      description: this.description,
      responsible: this.responsible,
      isCompleted: this.isCompleted,
    };
  }
}
