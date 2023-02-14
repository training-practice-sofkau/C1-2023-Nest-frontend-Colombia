export class itemDetail {
  title: string;
  description: string;
  responsible: string;
  isCompleted: boolean;

  constructor(
    title: string,
    description: string,
    responsible: string,
    isCompleted: boolean
  ) {
    this.title = title;
    this.description = description;
    this.responsible = responsible;
    this.isCompleted = isCompleted;
  }

  getData(): {
    title: string;
    description: string;
    responsible: string;
    isCompleted: boolean;
  } {
    return {
      title: this.title,
      description: this.description,
      responsible: this.responsible,
      isCompleted: this.isCompleted,
    };
  }
}
