export class Topping {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly price: number,
  ) {}
  public getFormattedPrice = () => this.price.toFixed(2);
}
