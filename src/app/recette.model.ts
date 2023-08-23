export class Recette {
  constructor(
    public id: string,
    public title: string,
    public image: string,
    public description: string,
    public ingredients:string[],
    public instructions:string[],
    public category: string,
  ){}
}
