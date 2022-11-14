import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { LanguageService } from '../../language-service/language.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit, OnDestroy {
  actualLanguageSelected: string = '';
  LANGUAGES = this.languages.LANGUAGES

  constructor(public languages: LanguageService, public cartServ: CartService, private _snackBar: MatSnackBar) { }
  ngOnInit(): void {
    this.languages.$actualLanguage.subscribe((languageSelected) => {
      this.actualLanguageSelected = languageSelected;
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  buy(pizza: Pizza) {
    this.cartServ.AddToCart(pizza);
    this._snackBar.open(this.LANGUAGES[this.actualLanguageSelected].cartAdded + '🍕', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['successAlert']
    })
  }



  ngOnDestroy(): void {
  }
}

export interface Pizza {
  id: number;
  description: string;
  name: string;
  ingre1: string;
  ingre2: string;
  price: number;
  base?: string;
  ingre3?: string;
  ingre4?: string;
  picture?: string;
}[]
