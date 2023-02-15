
export class TaskUpdateModel{


  title: string;
  descripccion: string;
  resposible: string;
  isCompleted: boolean;
  idCalendar: number;



  constructor(title: string, descripccion: string,resposible: string,isCompleted: boolean,idCalendar: number){

   this.title = title;
   this.descripccion = descripccion;
   this.resposible = resposible;
   this.isCompleted = isCompleted;
   this.idCalendar = idCalendar;


  }



 getData(): {title: string, descripccion: string, resposible: string, isCompleted: boolean,idCalendar: number} {


  {

   return {

   title: this.title,
   descripccion: this.descripccion,
   resposible: this.resposible,
   isCompleted: this.isCompleted,
   idCalendar: this.idCalendar

   }
  }

 }

}
