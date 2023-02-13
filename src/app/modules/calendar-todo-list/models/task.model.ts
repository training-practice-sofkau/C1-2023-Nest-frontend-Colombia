
export class TaskModel{

  id: number;
  title: string;
  descripccion: string;
  resposible: string;
  isCompleted: boolean;
  estate:number;
  idCalendar: number;
  idCalendarNavigation: null

  constructor(id: number,title: string, descripccion: string,resposible: string,isCompleted: boolean,estate: number, idCalendar: number, idCalendarNavigation: null){

   this.id = id;
   this.title = title;
   this.descripccion = descripccion;
   this.resposible = resposible;
   this.isCompleted = isCompleted;
   this.estate = estate;
   this.idCalendar = idCalendar;
   this.idCalendarNavigation = idCalendarNavigation;


  }

  /*

 getData(): {Title: string, Descripccion: string, Resposible: string, IsCompleted: boolean,Estate: number, IdCalendar: number} {


  {

   return {

   Title: this.Title,
   Descripccion: this.Descripccion,
   Resposible: this.Resposible,
   IsCompleted: this.IsCompleted,
   Estate: this.Estate,
   IdCalendar: this.IdCalendar

   }
  }

 }*/

}
