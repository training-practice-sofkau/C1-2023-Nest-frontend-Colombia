
export class NewTaskModel{

   Title: string;
   Descripccion: string;
   Resposible: string;
   IsCompleted: boolean;
   IdCalendar: number;

   constructor(Title: string, Descripccion: string,Resposible: string,IsCompleted: boolean,ICalendar: number){

    this.Title = Title;
    this.Descripccion = Descripccion;
    this.Resposible = Resposible;
    this.IsCompleted = IsCompleted;
    this.IdCalendar = ICalendar;
  }


  getData(): {Title: string, Descripccion: string, Resposible: string, IsCompleted: boolean, IdCalendar: number} {


   {

    return {

    Title: this.Title,
    Descripccion: this.Descripccion,
    Resposible: this.Resposible,
    IsCompleted: this.IsCompleted,
    IdCalendar: this.IdCalendar
  }

   }

  }
}
