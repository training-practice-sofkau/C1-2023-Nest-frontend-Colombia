
export class TaskModel{


  id: string;
  title: string;
  descripccion: string;
  resposible: string;
  isCompleted: boolean;
  estate:number;
  idCalendar: number;
  idUser: string;
  idCalendarNavigation: null

  constructor(id: string ,title: string, descripccion: string,resposible: string,isCompleted: boolean,estate: number, idCalendar: number,idUser: string, idCalendarNavigation: null){

   this.id = id;
   this.title = title;
   this.descripccion = descripccion;
   this.resposible = resposible;
   this.isCompleted = isCompleted;
   this.estate = estate;
   this.idCalendar = idCalendar;
   this.idUser = idUser;
   this.idCalendarNavigation = idCalendarNavigation;


  }



 getData(): {id: string,title: string, descripccion: string, resposible: string, isCompleted: boolean, estate: number, idCalendar: number,idUser: string, idCalendarNavigation: null} {


  {

   return {

    id: this.id,
   title: this.title,
   descripccion: this.descripccion,
   resposible: this.resposible,
   isCompleted: this.isCompleted,
   estate: this.estate,
   idCalendar: this.idCalendar,
   idUser: this.idUser,
   idCalendarNavigation: this.idCalendarNavigation
   }
  }

 }

}
