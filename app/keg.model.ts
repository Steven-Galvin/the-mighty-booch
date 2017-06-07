export class Keg {
  public volume: number = 124;
  constructor(
    public name: string,
    public brand: string,
    public price: number,
    public ABV: number,
    public typeOfBev: string) { }
}
