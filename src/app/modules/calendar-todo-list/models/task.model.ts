
export class TaskModel{


  title: string;
  descripccion: string;
  resposible: string;
  isCompleted: boolean;
  estate:number;
  idCalendar: number;
  idCalendarNavigation: null

  constructor(title: string, descripccion: string,resposible: string,isCompleted: boolean,estate: number, idCalendar: number, idCalendarNavigation: null){

   this.title = title;
   this.descripccion = descripccion;
   this.resposible = resposible;
   this.isCompleted = isCompleted;
   this.estate = estate;
   this.idCalendar = idCalendar;
   this.idCalendarNavigation = idCalendarNavigation;


  }



 getData(): {title: string, descripccion: string, resposible: string, isCompleted: boolean, estate: number, idCalendar: number} {


  {

   return {

   title: this.title,
   descripccion: this.descripccion,
   resposible: this.resposible,
   isCompleted: this.isCompleted,
   estate: this.estate,
   idCalendar: this.idCalendar

   }
  }

 }

}
