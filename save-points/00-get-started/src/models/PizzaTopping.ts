import { Topping } from "./Topping";

export class PizzaTopping {
  constructor(
    public topping: Topping,
    public toppingId: number,
    public pizzaId: number,
  ) {}
}
