export class TaskModel{

  Title: string;
  Descripccion: string;
  Resposible: string;
  IsCompleted: boolean;

  constructor(Title: string, Descripccion: string,Resposible: string,IsCompleted: boolean){

   this.Title = Title;
   this.Descripccion = Descripccion;
   this.Resposible = Resposible;
   this.IsCompleted = IsCompleted;
 }


 getData(): {Title: string, Descripccion: string, Resposible: string, IsCompleted: boolean} {

  {

   return {

   Title: this.Title,
   Descripccion: this.Descripccion,
   Resposible: this.Resposible,
   IsCompleted: this.IsCompleted}

  }

 }
}
