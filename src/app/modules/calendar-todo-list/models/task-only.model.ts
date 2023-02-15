
export class OnlyTaskModel{

  Title: string;
  Descripccion: string;
  Resposible: string;
  IdCalendar: number;

  constructor(Title: string, Descripccion: string,Resposible: string,ICalendar: number){

   this.Title = Title;
   this.Descripccion = Descripccion;
   this.Resposible = Resposible;
   this.IdCalendar = ICalendar;
 }


 getData(): {Title: string, Descripccion: string, Resposible: string, IdCalendar: number} {


  {

   return {

   Title: this.Title,
   Descripccion: this.Descripccion,
   Resposible: this.Resposible,
   IdCalendar: this.IdCalendar
 }

  }

 }
}
