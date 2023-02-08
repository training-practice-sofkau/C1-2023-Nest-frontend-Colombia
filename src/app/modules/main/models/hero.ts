export class Hero {

  constructor(
    public id: number,
    public name: string,
    public power: string,
    public age: number,
    public lastFight: number,
    public telephone: string,
    public alterEgo?: string
  ) {  }

}