import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/language-service/language.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  actualLanguageSelected: string = '';
  LANGUAGES = this.languages.LANGUAGES

  constructor(public languages: LanguageService) { }

  ngOnInit(): void {
    this.languages.$actualLanguage.subscribe((languageSelected) => {
      this.actualLanguageSelected = languageSelected
    })


}
}
