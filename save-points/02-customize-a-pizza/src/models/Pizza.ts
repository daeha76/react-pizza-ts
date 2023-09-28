import { PizzaSpecial } from "./PizzaSpecial";
import { PizzaTopping } from "./PizzaTopping";

type DefaultSize = 12;
type MinimumSize = 9;
type MaximumSize = 17;

export class Pizza {
  constructor(
    public readonly special: PizzaSpecial,
    public readonly specialId: number,
    ) {
      this.size = Pizza.defaultSize;
      this.toppings = [];
      this.name = special.name;
      this.description = special.description;
      this.imageUrl = special.imageUrl;
      this.basePrice = special.basePrice;
    }

  public static readonly defaultSize: DefaultSize = 12;
  public static readonly minimumSize: MinimumSize = 9;
  public static readonly maximumSize: MaximumSize = 17;
  
  public size: number;
  public toppings: Array<PizzaTopping>;
  public name: string;
  public description: string;
  public imageUrl: string;
  public basePrice: number;
  public id?: number;
  public orderId?: number;

  public getBasePrice = () =>  (this.size / Pizza.defaultSize) * this.special.basePrice;
  public getTotalPrice = () => this.getBasePrice() + this.toppings.reduce((acc, t) => acc + t.topping.price, 0);
  public getFormattedTotalPrice = () => this.getTotalPrice().toFixed(2);
  }