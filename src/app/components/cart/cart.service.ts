import { Injectable } from '@angular/core';
import { Pizza } from '../pizza-list/pizza-list.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  pizzas = new Map<number, Pizza>;
  totalPizzas = [this.pizzas];

  AddToCart(pizza: Pizza) {
    this.totalPizzas.push(this.pizzas.set(pizza.id, pizza));

    console.log(this.totalPizzas);

  }
  constructor() { }
}

export interface PizzaKind {
  [id: number]: Pizza[]
}
