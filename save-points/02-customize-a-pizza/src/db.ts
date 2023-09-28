import { PizzaSpecial } from "models/PizzaSpecial";
import { Topping } from "models/Topping";

export const toppings = Array<Topping> (
  new Topping(1, "Extra cheese", 2.5),
  new Topping(2, "American bacon", 2.99),
  new Topping(3, "British bacon", 2.99),
  new Topping(4, "Tea and crumpets", 5.0),
  new Topping(5, "Fresh-baked scones", 4.5),
  new Topping(6, "Bell peppers", 1.0),
  new Topping(7, "Onions", 1.0),
  new Topping(8, "Mushrooms", 1.0),
  new Topping(9, "Pepperoni", 1.0),
  new Topping(10, "Duck sausage", 3.2),
  new Topping(11, "Venison meatballs", 2.5),
  new Topping(12, "Served on a silver platter", 250.99),
  new Topping(13, "Lobster on top", 64.5),
  new Topping(14, "Sturgeon caviar", 101.75),
  new Topping(15, "Artichoke hearts", 3.4),
  new Topping(16, "Fresh tomatoes", 1.5),
  new Topping(17, "Basil", 1.5),
  new Topping(18, "Steak (medium-rare)", 8.5),
  new Topping(19, "Blazing hot peppers", 4.2),
  new Topping(20, "Buffalo chicken", 5.0),
  new Topping(21, "Blue cheese", 2.5),
)
export const pizzas = Array<PizzaSpecial> (
  new PizzaSpecial(1, "Basic Cheese Pizza", "It's cheesy and delicious. Why wouldn't you want one?", 9.99, "./images/pizzas/cheese.jpg"),
  new PizzaSpecial(2, "The Baconatorizor", "It has EVERY kind of bacon", 11.99, "./images/pizzas/bacon.jpg"),
  new PizzaSpecial(3, "Classic pepperoni", "It's the pizza you grew up with, but Blazing hot!", 10.5, "./images/pizzas/pepperoni.jpg"),
  new PizzaSpecial(4, "Buffalo chicken", "Spicy chicken, hot sauce and bleu cheese, guaranteed to warm you up", 12.75, "./images/pizzas/meaty.jpg"),
  new PizzaSpecial(5, "Mushroom Lovers", "It has mushrooms. Isn't that obvious?", 11.0, "./images/pizzas/mushroom.jpg"),
  new PizzaSpecial(6, "The Brit", "When in London...", 10.25, "./images/pizzas/brit.jpg"),
  new PizzaSpecial(7, "Veggie Delight", "It's like salad, but on a pizza", 11.5, "./images/pizzas/salad.jpg"),
  new PizzaSpecial(8, "Margherita", "Traditional Italian pizza with tomatoes and basil", 9.99, "./images/pizzas/margherita.jpg"),
)