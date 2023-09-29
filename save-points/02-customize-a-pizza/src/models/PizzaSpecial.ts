export class PizzaSpecial {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly description: string,
    public readonly basePrice: number,
    public readonly imageUrl: string,
  ) {}

  public getFormattedBasePrice = () => this.basePrice.toFixed(2);
}
