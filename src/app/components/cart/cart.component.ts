import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/language-service/language.service';
import { Item } from '../pizza-list/pizza-list.component';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  actualLanguageSelected: string = '';
  LANGUAGES = this.languages.LANGUAGES
  totalItems: Item[] = [];


  constructor(public languages: LanguageService, private cartService: CartService) { }

  ngOnInit(): void {
    this.languages.$actualLanguage.subscribe((languageSelected) => {
      this.actualLanguageSelected = languageSelected
    })
    this.cartService.$items.subscribe((items) => {
      this.totalItems = items
      console.log(this.totalItems);
    })

  }
}
