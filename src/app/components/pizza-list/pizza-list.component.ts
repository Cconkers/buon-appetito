import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { LanguageService } from '../../language-service/language.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit, OnDestroy {
  @ViewChild('card') card!: ElementRef;
  actualLanguageSelected: string = '';
  actualItems: Item[] = [];
  LANGUAGES = this.languages.LANGUAGES

  constructor(public languages: LanguageService, public cartServ: CartService, private _snackBar: MatSnackBar) { }
  ngOnInit(): void {
    this.languages.$actualLanguage.subscribe((languageSelected) => {
      this.actualLanguageSelected = languageSelected;
    })
  }


  buy(pizza: Item) {


  }

  add(event: Event, pizza: Item) {
    const objetive = parseInt((event.target as HTMLAreaElement).id)
    console.log(objetive);
    this.LANGUAGES[this.actualLanguageSelected].items[objetive - 1].quantity++;
    this.cartServ.AddToCart(pizza);
    this._snackBar.open(pizza.name + ' ' + this.LANGUAGES[this.actualLanguageSelected].cartAdded + ' ' + '🍕', '', {
      duration: 900,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['successAlert']
    })
  }
  decrease(pizza: Item, i: number) {
  }
  ngOnDestroy(): void {
  }
}

export interface Item {
  id: number;
  name?: string;
  quantity: number;
  description?: string;
  ingre1?: string;
  ingre2?: string;
  price?: number;
  base?: string;
  ingre3?: string;
  ingre4?: string;
  size?: string;
  picture?: string;
  discount?: number;
}
