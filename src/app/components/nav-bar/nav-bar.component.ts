import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/language-service/language.service';
import { CartService } from '../cart/cart.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  actualLanguageSelected: string = '';
  LANGUAGES = this.languages.LANGUAGES

  constructor(public languages: LanguageService, public cartServ: CartService) { }

  ngOnInit(): void {
    this.languages.$actualLanguage.subscribe((languageSelected) => {
      this.actualLanguageSelected = languageSelected
    })
    this.subTotal();
  }
  subTotal(): number {
    let total = 0;
    this.cartServ.$items.subscribe((items) => {
      total = items.reduce((productValue, product) => {
        return productValue + product.quantity
      }, 0)
    })
    return total;
  }
}
