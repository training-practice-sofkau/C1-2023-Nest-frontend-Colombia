export class TaskUpdateCompletekModel{



  isCompleted: boolean;


  constructor(isCompleted: boolean){


   this.isCompleted = isCompleted;


  }



 getData(): { isCompleted: boolean} {


  {

   return {


   isCompleted: this.isCompleted,

   }
  }

 }

}
