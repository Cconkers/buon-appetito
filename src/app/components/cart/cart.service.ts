import { Injectable } from '@angular/core';
import { Item } from '../pizza-list/pizza-list.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items: Item[] = [];
  $items: BehaviorSubject<Item[]> = new BehaviorSubject(this.items);

  AddToCart(itemComing: Item) {
    if (this.items.length === 0) {
      this.items.push({ ...itemComing, quantity: 1 });
    } else {
      const producto = this.items.find(({ id }) => id === itemComing.id)
      if (producto) {
        producto.quantity++;
      } else {
        this.items.push({ ...itemComing, quantity: 1 });
      }
    }
  }

  constructor() { }
}

