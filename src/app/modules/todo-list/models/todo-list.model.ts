/* eslint-disable prettier/prettier */
export class todoListModel {
  title: string;
  description: string;
  responsible: string;

  constructor(title: string, description: string, responsible: string) {
    this.title = title;
    this.description = description;
    this.responsible = responsible;
  }

  getData(): { title: string; description: string; responsible: string }{
    return {
      title: this.title,
      description: this.description,
      responsible: this.responsible
    };
  }

}
