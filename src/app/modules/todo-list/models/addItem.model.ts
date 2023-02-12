export class AddItemModel{
  title: string;
  description:string;
  responsible: string;
  numberDay: number;
  nameCalendar: string;

  constructor(title: string,   description:string, responsible: string, numberDay: number, nameCalendar: string){
    this.title = title;
    this.description = description;
    this.responsible = responsible;
    this.numberDay = numberDay;
    this.nameCalendar = nameCalendar;
  }

  toString(): string{
    return JSON.stringify({
      title: this.title,
      description: this.description,
      responsible: this.responsible,
      numberDay: this.numberDay,
      nameCalendar: this.nameCalendar
    })
  }

}
