import { PizzaSpecial } from "./PizzaSpecial";
import { Topping } from "./Topping";

export class Pizza {
    constructor(
      public readonly defaultSize = 12,
      public readonly minimumSize = 9,
      public readonly maximumSize = 17,
      public id: number,
      public orderId: number,
      public special: PizzaSpecial,
      public specialId: number,
      public size: number,
      public toppings: Array<Topping>,
      public imageUrl: string,
      public name: string,
      public description: string,
      public basePrice: number,
      ) {}

      public getBasePrice = () =>  (this.size / this.defaultSize) * this.special.basePrice;
      public getTotalPrice = () => this.getBasePrice() + this.toppings.reduce((acc, t) => acc + t.price, 0);
      public getFormattedTotalPrice = () => this.getTotalPrice().toFixed(2);
  }